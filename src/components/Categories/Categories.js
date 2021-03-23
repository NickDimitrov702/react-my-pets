import CategoryNav from './CategoryNavigation/CategoryNav'
import { Component } from 'react'
import Pet from '../Pets/Pets'
import * as PetsService from '../../service/petService'

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all'
        }
    }

    componentDidMount() {
        PetsService.getAll()
                .then(res => this.setState({pets: res}))
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category
        if(prevProps.match.params.category == category) {
            return;
        }
        PetsService.getAll(category)
        .then(res => {
            this.setState({pets: res, currentCategory: category})
        })
    }

    render() {
    
        return (
            <div className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNav />

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <Pet key={x.id} name={x.name}
                        {...x} />
                    )}
                </ul>

            </div>
        );
    }
}

export default Categories;