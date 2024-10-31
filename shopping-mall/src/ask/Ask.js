import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Ask.css'; // 스타일링 파일
import Header from '../header/Header.js'
import Footer from '../footer/Footer.js'

const MAX_CONTENT_LENGTH = 800; // 최대 글자 수

const Ask = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [searchActive, setSearchActive] = useState(false);
    const [imageFiles, setImageFiles] = useState([]);
    const [contentLength, setContentLength] = useState(0); // 글자 수 상태 추가
    const fileInputRef = useRef(null);  // 파일 입력 필드 참조

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (value) => {
        const textLength = value.replace(/<[^>]+>/g, '').length; // HTML 태그를 제외한 실제 텍스트 길이 체크
        if (textLength > MAX_CONTENT_LENGTH) {
            setErrorMessage(`내용은 최대 ${MAX_CONTENT_LENGTH}자까지만 입력할 수 있습니다.`);
            return;
        }

        setContent(value);
        setContentLength(textLength);
        setErrorMessage('');
    };

    const handleFileRemove = (index) => {
        setImageFiles((prevFiles) => {
            const updatedFiles = prevFiles.filter((_, i) => i !== index);
            
            // 모든 파일이 삭제되었을 때 파일 입력 필드를 리셋
            if (updatedFiles.length === 0 && fileInputRef.current) {
                fileInputRef.current.value = null;  // 파일 입력 필드 초기화
            }

            return updatedFiles;
        });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (imageFiles.length + files.length > 3) {
            setErrorMessage('최대 3개의 파일만 첨부할 수 있습니다.');
            return;
        }
        setImageFiles((prevFiles) => [...prevFiles, ...files]);
        setErrorMessage('');
    };

    const handleSubmit = () => {
        setErrorMessage('');
        console.log('작성하기 클릭:', { title, content, imageFiles });
    };

    const handleCancel = () => {
        console.log('취소 클릭');
        setTitle('');
        setContent('');
        setImageFiles([]);
        if (fileInputRef.current) {
            fileInputRef.current.value = null;  // 파일 입력 필드 초기화
        }
    };

    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
            ['clean']
        ],
    };

    return (
        <div className="back-img1">
            <Header />
            <div className="board-write-container">
                <h2 className="board-title">Board</h2>
                <input 
                    type="text"
                    placeholder="제목을 입력해주세요"
                    className="board-title-input"
                    value={title}
                    onChange={handleTitleChange}
                />
                <ReactQuill 
                    value={content} 
                    onChange={handleContentChange}
                    modules={modules}
                    placeholder="내용을 입력해주세요."
                    className="board-content-editor-quill-editor"
                />
                <div className="max-content">
                <p>{contentLength} / {MAX_CONTENT_LENGTH}자</p> {/* 글자 수 표시 */}
                </div>

                <div className="file-upload-container">
                    <input 
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        id="file-upload"
                        multiple
                        ref={fileInputRef}  // 파일 입력 필드 참조
                    />
                    <label htmlFor="file-upload" className="file-upload-button"></label>
                </div>
                
                {imageFiles.length > 0 && (
                    <div className="file-list">
                        {imageFiles.map((file, index) => (
                            <div key={index} className="file-item">
                                <span>{file.name}</span>
                                <button onClick={() => handleFileRemove(index)} className="delete-file-button">삭제</button>
                            </div>
                        ))}
                    </div>
                )}
                
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                
                <div className="board-button-group">
                    <button className="submit-button" onClick={handleSubmit}>작성하기</button>
                    <button className="cancel-button" onClick={handleCancel}>취소</button>
                </div>

                <div>
                </div>
            </div>
        </div>
    );
};

export default Ask;
