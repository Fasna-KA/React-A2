
import React, { Component } from 'react'
import './styling.css'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
        department:'',
        rating:'',
        // Show:false
        list:[]         
      }
    }


      handleName = event => {
        this.setState({
          name:event.target.value})
      }

      handleDepartment = event => {
        this.setState({
          department:event.target.value})
      }

      handleRating = event => {
        this.setState({
          rating:event.target.value})
      }

      handleSubmit = event => {
        event.preventDefault()
        const {name,department,rating} = this.state

        console.log(name,department,rating);

        // this.setState({}, (ls) => {
        //   [...ls, this.state];
          

        // });
    
        if(name&&department&&rating){
        }
        

        // this.setState({
        //   Show:!this.state.Show

        // })
        // alert(`${this.state.name} ${this.state.department} ${this.state.rating}`);//gives values as alert on submition
        //  if(name&&department&&rating){
        //    <div style={{color:"white"}}>Name :{name} </div>
        //   // list((ls)=>[...ls,this.setState])
          
        
        
          
        }


  render() {

    const {name,department,rating} = this.state;

    return (

        <form onSubmit={this.handleSubmit}>
            <div className='label'>
                <h1 style={{color:'white' ,marginBottom:'50px'}}>EMPLOYEE FEEDBACK FORM</h1>
                <label>Name : </label>
                <input type='text' value={name} onChange={this.handleName} placeholder='Name'></input>

                <label>Department : </label>
                <input type='text' value={department} onChange={this.handleDepartment} placeholder='Department'></input>

                <label>Rating : </label>
                <input type='number' value={rating} onChange={this.handleRating} placeholder='Rating'></input>

                <label>Submit</label>
                <input type='submit'></input>

                {/* {
            this.state.Show ? 
            <h2> {name}</h2>
            :
            null

                }
            */}

          {/* {
            list.map((a) => <div>
              <div></div>
            </div>)
          }   */}



            </div>
        </form>


    )
  }
}

export default Form