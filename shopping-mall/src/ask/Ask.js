import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate 추가
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Ask.css'; // 스타일링 파일

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
            <header>
                <div className="menu-bar">
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
                    <nav className="menu">
                        <label htmlFor="menu-toggle" className="close-icon">X</label>
                        <div className="menu-bottom">
                            <div className="shop">
                                <span className="main-category">SHOP</span>
                                <a href="#" className="sub-category">All</a>
                                <a href="#" className="sub-category">Best</a>
                                <a href="#" className="sub-category">New</a>
                                <a href="#" className="sub-category">Outer</a>
                                <a href="#" className="sub-category">Top</a>
                                <a href="#" className="sub-category">Bottom</a>
                                <a href="#" className="sub-category">Etc</a>
                            </div>

                            <div className="company">
                                <span className="main-category">Q&A</span>
                                <Link to="/ask" className="sub-category">Ask</Link>
                                <a href="#" className="sub-category">FAQ</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="Logo" className="logo" />
                </Link>
                <div className="header-icons">
                    <a href="#" className="icon">join</a>
                    <a href="#" className="icon">login</a>
                    <a href="#" className="icon">mypage</a>
                    <a href="#" className="icon" onClick={toggleSearch}>search</a>
                    <a href="#" className="icon">cart</a>
                </div>
            </header>

            <div className={`search-bar ${searchActive ? 'active' : ''}`}>
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-btn">Search</button>
                <button className="back-btn" onClick={toggleSearch}>Back</button>
            </div>

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
