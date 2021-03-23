import {useEffect, useState} from 'react'
import * as PetsService from '../../service/petService'

const Petdetails = ({
    match,
}) => {
    let [pet, setPet] = useState({});
    useEffect(() => {
        PetsService.getOne(match.params.petId)
            .then(res => setPet(res))
    }, [])

    return(
        <div className="detailsOtherPet">
                <h3>{pet.name}</h3>
                <p>Pet counter: {pet.likes} <a href="#"><button className="button"><i className="fas fa-heart"></i>
                            Pet</button></a>
                </p>
                <p className="img"><img src={pet.imgURL}/></p>
				<p className="description">{pet.description}</p>
            </div>
    );
}

export default Petdetails;