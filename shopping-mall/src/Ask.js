import React, { useState } from 'react';
import './Ask.css';

const Ask = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleImageDelete = () => {
        setImage(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('제목:', title);
        console.log('내용:', content);
        console.log('이미지:', image);
    };

    return (
        <div className="inquiry-container">
            <h1>문의 게시판</h1>
            <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-group">
                    <br></br>
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows="10" // 내용 필드 크기 증가
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image-upload" className="image-upload">
                        <p>사진 첨부</p>
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/jpeg, image/png"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>

                {image && (
                    <div className="image-preview-container">
                        <img
                            src={URL.createObjectURL(image)}
                            alt="첨부된 이미지"
                            className="image-preview"
                        />
                        <button type="button" className="delete-image-btn" onClick={handleImageDelete}>삭제</button>
                    </div>
                )}

                <div className="button-group">
                    <button type="submit" className="submit-btn">등록</button>
                    <button type="button" className="cancel-btn" onClick={() => { setTitle(''); setContent(''); setImage(null); }}>취소</button>
                </div>
            </form>
            <p className="note"># 사진은 최대 10MB, 확장자는 JPEG와 PNG 가능</p>
            <p className="warning">
                상품과 관련없는 내용 또는 이미지, 욕설/비방, 개인정보유출, 광고/홍보글 등 적절하지 않은 게시물은 별도의 고지 없이 비공개 처리될 수 있습니다.<br></br>
                작성된 게시물(사진, 동영상 포함)은 운영 및 마케팅에 활용될 수 있습니다.
            </p>
        </div>
    );
};

export default Ask;
