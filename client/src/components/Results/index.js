import React, {Component} from "react";
import SearchField from "./SearchField";
import ResultMapper from "./ResultMapper";
import Table from "react-bootstrap/Table";

class Results extends Component {
    state = {
        search: "",
        results: []
    };

    componentDidMount() {
        

    handleInputChange = event =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        
            this.setState({results: this.state.savedQuery})
        
        
    }

    handleFormSubmit = event => {
        event.preventDefault();
        let filtered = [];
        for (var i=0; i < this.state.results.length; i++){
            if (this.state.results[i].firstName === this.state.search || this.state.results[i].lastName === this.state.search){
            filtered.push(this.state.results[i])
                }
        }
        this.setState({results: filtered});
    };




    render() {
        return (
            <div>
                <SearchField
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    />


        <Table striped bordered hover>
            <thead>
        <tr>
               <th>Image</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email Address</th>
               <th>Phone Number</th>
        </tr>
        </thead>
        <tbody>
        {[...this.state.results].map((e) =>
            <ResultMapper
                image={e.image}
                firstName={e.firstName}
                lastName={e.lastName}
                email={e.email}
                phone={e.phone}
            />
            )}
        </tbody>
        </Table>
            </div>
        )
    }
}

export default Results;