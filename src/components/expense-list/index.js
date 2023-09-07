import React from 'react'
import './expense-list.css'
import Card from './card';
import { ToastContainer,toast } from 'react-toastify';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const ExpenseList = () => {
    const {expenseList: list, query}=useSelector((state)=>state.expenses);
    const filteredList=list.filter(item=>item.title.includes(query))
    const notifySuccess=()=> toast.success("Expense Deleted");
 //return <div>{list.length ? list.map((item)=> <div> Hello </div>) : null} </div>;  

  return <div className='expense-list'>
     <ToastContainer
    position="bottom-left"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    />
    {filteredList.length?filteredList.map(item=>(
      <Card item={item} notifySuccess={notifySuccess} />
    )):<div className='empty-state'>
     <img src={require('../../assets/images/empty-cart.png')} alt='Empty list' className='empty-image' />
    <br/> <label>Uh Oh! Your expense list is empty </label>
     </div>}

  </div>
};

export default ExpenseList;