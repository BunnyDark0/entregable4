import React from 'react'
import "./styles/UserCard.css"


const UserCard = ({ user, deleteUser, setUpdatingUser, handleClickShowModal }) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }
  return (
    <article className='userCard' >
      <h3 className='userCard__name'>{user.first_name} {user.last_name}
      </h3>

      <ul>
        <li className='userCard__data'>
          <span className='titleData'>EMAIL</span>
          <span className='data'>{user.email}</span>
        </li>
        <li className='userCard__birthday'>
          <span className='titleData'>BIRTHDAY</span>
          <span>
            <i className='bx bx-gift'></i>
            <span className='Date'>{user.birthday}</span>
          </span>
        </li>
      </ul>

      <section className='section'>
        <footer className='userCard_btn1'>
          <button className='button__trash' onClick={() => deleteUser(user.id)}>
            <i className='bx bx-trash'></i>
          </button>

          <button className='button__pencil' onClick={handleClickEdit}>
            <i className='bx bx-pencil'></i>
          </button>
        </footer>
      </section>
    </article>
  )
}

export default UserCard