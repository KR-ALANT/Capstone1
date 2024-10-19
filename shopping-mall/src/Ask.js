import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Ask.css'; // 스타일링 파일

const Ask = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [searchActive, setSearchActive] = useState(false);
    const [imageFiles, setImageFiles] = useState([]);
    const [fileName, setFileName] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (value) => {
        setContent(value);
    };

    const handleFileRemove = (index) => {
        const updatedFiles = imageFiles.filter((_, i) => i !== index);
        setImageFiles(updatedFiles);
        
        // 파일 삭제 후 파일 이름 업데이트
        if (updatedFiles.length > 0) {
            setFileName(updatedFiles.map(file => file.name).join(', '));
        } else {
            setFileName(''); // 파일이 없을 경우 파일명을 빈 문자열로 설정
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImageFiles((prevFiles) => [...prevFiles, ...files]);
        setFileName((prevFiles) => prevFiles.length ? prevFiles.map(file => file.name).join(', ') + ', ' + files.map(file => file.name).join(', ') : files.map(file => file.name).join(', '));
    };

    const handleSubmit = () => {
        // 제목이나 내용이 비어 있을 때 경고 문구를 표시
        if (title.trim() === '' || content.trim() === '') {
            setErrorMessage('제목과 내용을 모두 입력해주세요.');
            return;
        }

        setErrorMessage('');  // 에러 메시지 초기화
        console.log('작성하기 클릭:', { title, content, imageFiles });
        // 작성 로직 추가
    };

    const handleCancel = () => {
        console.log('취소 클릭');
        // 취소 로직 추가
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
        <div>
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
                    className="board-content-editor"
                />
                
                {/* 첨부된 이미지 파일 목록 표시 및 삭제 버튼 */}
                <div className="file-attachment">
                    <input 
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        style={{ display: 'none' }} // 파일 입력은 숨김
                        id="file-upload"
                    />
                    <button htmlFor="file-upload">파일선택</button>
                    <span className="file-name">{fileName}</span>
                    {imageFiles.length > 0 && (
                        <button onClick={() => handleFileRemove(0)}>삭제</button>
                    )}
                </div>
                
                {/* 에러 메시지 표시 */}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                
                <div className="board-button-group">
                    <button className="submit-button" onClick={handleSubmit}>작성하기</button>
                    <button className="cancel-button" onClick={handleCancel}>취소</button>
                </div>
            </div>
        </div>
    );
};

export default Ask;
