import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Ưu đãi dành cho bạn trên email của bạn</h1>
            <p>Đăng ký để nhận bản tin cập nhật thông tin mới nhất</p>
            <div>
                <input type="email" placeholder='Email của bạn' />
                <button>Đăng ký</button>
            </div>
        </div>
    )
}

export default NewsLetter