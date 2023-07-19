import React from 'react'
import './Modal.css'

const Modal = ({ showModal, setShowModal }) => {

    const handleCloseModal = () => {
        setShowModal(false)
    }

    if (showModal) {
        // const { title, overview, release_date, vote_average, vote_count, imageSource } = modalData;
        const userData = JSON.parse(localStorage.getItem("userData"));
        return (
            <>
                <div className='modal-style'>
                    <table className='table-style'>
                        <thead className='inner-table'>
                            <tr className='table-data'>
                                <th className='table-values'>Sr#</th>
                                <th className='table-values'>User Name</th>
                                <th className='table-values'>User Score</th>
                            </tr>
                        </thead>
                        <tbody className='inner-table'>
                            {userData.map((data, key) => {
                                const { userName, userScore } = data;
                                return (
                                    <tr key={data.id}>
                                        <td className='table-values'>{key + 1}</td>
                                        <td className='table-values'>{userName}</td>
                                        <td className='table-values'>{userScore}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <button className='close-btn' onClick={handleCloseModal}>X</button>
            </>
        )
    }
}

export default Modal