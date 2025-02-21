import ReactPaginate from "react-paginate"
import { useState, useMemo, ChangeEvent} from "react"
import { useAllUsersStore } from "../../lib/store/useAllUsers"
import Filter from '/assets/icons/filter.svg'
import UserRow from "./UserRow"
import './userlist.style.scss'
import RightArrow from '/assets/icons/arrow-right.svg'
import LeftArrow from '/assets/icons/arrow-left.svg'
import DownArrow from '/assets/icons/select-down.svg'
import FilterForm from "../FilterForm/FilterForm"



const UserList = () => {

  const userList = useAllUsersStore((state) => state.filteredUsers)

  // creating pagination
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [usersPerPage, setUsersPerPage] = useState<number>(10)
  const [showForm, setShowForm] = useState<boolean>(false)
  
  // toggling showForm 
  const toggleForm = () => {
    setShowForm(!showForm)
  }

  // handling page changes
  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
   }
  // handling users per page change
  const handleUsersPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(e.target.value)
    setUsersPerPage(newValue)
  }

  // Pagination
  const startIndex = currentPage * usersPerPage;
  const endIndex  = startIndex + usersPerPage;

  // Tracking users based on the filtered data
  const displayedUsers = useMemo(() => userList.slice(startIndex, endIndex), [endIndex, userList])
  
  const customNextLabel = (
    <img src={RightArrow} alt="next button"/>
  )
  const customPrevLabel = (
    <img src={LeftArrow} alt="previous button"/>
  )

  //Tracking the page count
  const trackPageCount = () => {

    return Math.ceil(userList.length / usersPerPage)
  } 

  

  const pageViewNumbers = [10, 20, 50, 70, 100]

  return (
    
      <div className="user-list">
        <div className={`filter-form-container ${showForm && 'active'}`} >
          <FilterForm formProps={{toggleForm, setCurrentPage}}/>
        </div>
        <div className="swipe-help">swipe horizontally to view more details</div>
        <section className="content">
          <section className="table">
            <div className='headers'>
              <div className='organization'>
                <p>Organization</p>
                <div className='filter' onClick={toggleForm}>
                  <img src={Filter} alt='filter button'/>
                </div>
              </div>
              <div className='username'>
                <p>Username</p>
                <div className='filter' onClick={toggleForm}>
                  <img src={Filter} alt='filter button'/>
                </div>
              </div>
              <div className='email'>
                <p>Email</p>
                <div className='filter' onClick={toggleForm}>
                  <img src={Filter} alt='filter button'/>
                </div>
              </div>
              <div className='phone-num'>
                <p>Phone Number</p>
                <div className='filter' onClick={toggleForm}>
                  <img src={Filter} alt='filter button'/>
                </div>
              </div>
              <div className='date-joined'>
                <p>Date Joined</p>
                <div className='filter' onClick={toggleForm}>
                  <img src={Filter} alt='filter button'/>
                </div>
              </div>
              <div className='status'>
                <p>Status</p>
                <div className='filter' onClick={toggleForm}>
                  <img src={Filter} alt='filter button'/>
                </div>
              </div>
            </div>
            <div className="results">
              {
                displayedUsers.length === 0 ? (
                  <p className="error">No users with such records found</p>
                ) : (
                  displayedUsers.map((user) => 
                    <UserRow key={user.id} userData={user}/>
                  )
                )
              }
            </div>

          </section>
        </section>
      <section className="pagination">      
        <div className="page-guide">
          <span>Showing</span> 
          <div className="select-container">   
            <select  
              value = {usersPerPage}
              onChange={handleUsersPerPageChange}
            >
              {
                userList.length <= 10 ? <option>{userList.length}</option> :
                pageViewNumbers.map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))
              }
            </select>
            <img src={DownArrow} alt='select'/>
          </div>
          out of {userList.length}
        </div>
        <div>
          <ReactPaginate
            previousLabel={customPrevLabel}
            nextLabel={customNextLabel}
            breakLabel={"..."}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={trackPageCount()}
            onPageChange={handlePageChange}
            containerClassName={"pagination-container"}
            previousLinkClassName={"prevBtn"}
            nextClassName="next"
            previousClassName="prev"
            nextLinkClassName={"nextBtn"}
            disabledClassName={"disabled"}
            activeClassName={"active-page"}
            breakClassName={"break"}
            
          />
        </div>
      </section>
    </div>     
  )
}

export default UserList