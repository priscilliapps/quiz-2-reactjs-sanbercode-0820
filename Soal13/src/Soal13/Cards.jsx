import React from 'react'

function Card(props) {

    const data = [
        {name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"}, 
        {name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"}, 
        {name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"},
        {name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
    ]

    const allCards = data.map((props) => 
        <li className="cards_item">
            <figure className="cards_item_pic" data-category={props.name}>
                <img src={props.photo} alt="Image" className="cards_item_img"/>
            </figure>  
            <div className="cards_item_info">
                <h4 classname="cards_item_jobs">{props.profession}</h4>
                <h4 classname="cards_item_gender">{props.gender}</h4>
            </div>
        </li> 
    )
}

export default Card