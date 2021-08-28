import React, {useState} from 'react'

const AddPost = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    return <div>
        <form className="new-post" onSubmit={async (event) => {
            event.preventDefault();
            console.log(willDeliver);
        }}>
            <div>
                <label>Enter Post Title</label>
                <input type='text' placeholder='title' value={title}
                onChange={(event) => setTitle(event.target.value)}></input>
            </div>
            <div>
                <label>Enter Post Description</label>
                <input type='text' placeholder='description' value={description}
                onChange={(event) => setDescription(event.target.value)}></input>
            </div>
            <div>
                <label>Enter Item Price</label>
                <input type='text' placeholder='price' value={price}
                onChange={(event) => setPrice(event.target.value)}></input>
            </div>
            <div>
                <label>Enter Location</label>
                <input type='text' placeholder='location' value={location}
                onChange={(event) => setLocation(event.target.value)}></input>
            </div>
            <div>
                <label>Available For Delivery</label>
                <input type='checkbox' name='willdeliver' value='true'
                onClick={(event) => setWillDeliver(!willDeliver)}></input>
            </div>
            <button type='submit'>Submit Post</button>
        </form> 
    </div>
}


export default AddPost;