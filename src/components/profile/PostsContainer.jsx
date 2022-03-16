import { get, onValue } from '@firebase/database';
import { IonCard, IonCardContent, IonCardHeader, IonContent, IonImg, IonPage, IonTitle, useIonLoading } from '@ionic/react';
import { useEffect, useState } from 'react';
import { postsRef, usersRef } from '../../firebase-config';
import './PostsContainer.css';
import ProfileInfo from './ProfileInfo';


const PostsContainer = ({ userName }, { userTitle }) => {
	const [user, setUser] = useState({});
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [imageFile, setImageFile] = useState({});
	const [showLoader, dismissLoader] = useIonLoading();
	const [posts, setPosts] = useState([]);

	async function getUsers() {
        const snapshot = await get(usersRef);
        const usersArray = [];
        snapshot.forEach(postSnapshot => {
            const id = postSnapshot.key;
            const data = postSnapshot.val();
            const post = {
                id,
                ...data
            };
            usersArray.push(post);
        });

        return usersArray;
    }

    useEffect(() => {
        async function listenOnChange() {
            onValue(postsRef, async snapshot => {
                const users = await getUsers();
                const postsArray = [];
                snapshot.forEach(postSnapshot => {
                    const id = postSnapshot.key;
                    const data = postSnapshot.val();
                    const post = {
                        id,
                        ...data,
                        user: users.find(user => user.id == data.uid)
                    };
                    postsArray.push(post);
                });
                setPosts(postsArray.reverse());
            });
        }
        listenOnChange();
	}, []);
	
	return (
		<IonPage>
			<ProfileInfo name={userName} title={userTitle} />
			<div className='postsContainer'>
				{exampleARPosts.map((post) => {
					return (
						<IonCard key={post.id} className="profilePost">
							<IonCardHeader>{post.name}</IonCardHeader>
							<IonCardContent>
								<h4>{post.description}</h4>
								<IonImg src={post.imgURL} alt={post.content} className="profilePostImg" />

								<hr />
								<p>Latitude: {post.geolocation.latitude}</p>
								<p>Longitude: {post.geolocation.longitude}</p>
							</IonCardContent>
						</IonCard>
					);
				})}
			</div>
		</IonPage>
	);
};

export default PostsContainer;

// This part has to be refactored to accomodate for a nested component that will handle each card that contains the data
// IMG url will be for the firebase access, all this data down here will be moved to firebase -> It is hacky hack time here lol

// Requires styling

// requires updates on posts layout and profile styling. 
const exampleARPosts = [
	{
		id: '1',
		name: 'Penda Svane',
		imgURL:
			'https://imgs.search.brave.com/J5KlBVidIoXnwnM1h5-KJtX46hKHHfvU7l2E3-_unlk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0Nq/Z1M1NXRHb3Y1ZHFD/bkJ2aUhkb1ctMTIw/MC04MC5qcGc',
		content: 'A drawing made to signify peace among all Earthlings',
		description: 'A test post',
		geolocation: { latitude: '20000', longitude: '500000' },
	},
	{
		id: '2',
		name: 'Penda Svane',
		imgURL:
			'https://imgs.search.brave.com/J5KlBVidIoXnwnM1h5-KJtX46hKHHfvU7l2E3-_unlk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0Nq/Z1M1NXRHb3Y1ZHFD/bkJ2aUhkb1ctMTIw/MC04MC5qcGc',
		content: 'A drawing made to signify peace among all Earthlings',
		description: 'A test post',
		geolocation: { latitude: '20000', longitude: '500000' },
	},
	{
		id: '3',
		name: 'Penda Svane',
		imgURL:
			'https://imgs.search.brave.com/J5KlBVidIoXnwnM1h5-KJtX46hKHHfvU7l2E3-_unlk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0Nq/Z1M1NXRHb3Y1ZHFD/bkJ2aUhkb1ctMTIw/MC04MC5qcGc',
		content: 'A drawing made to signify peace among all Earthlings',
		description: 'A test post',
		geolocation: { latitude: '20000', longitude: '500000' },
	},
	{
		id: '4',
		name: 'Penda Svane',
		imgURL:
			'https://imgs.search.brave.com/J5KlBVidIoXnwnM1h5-KJtX46hKHHfvU7l2E3-_unlk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0Nq/Z1M1NXRHb3Y1ZHFD/bkJ2aUhkb1ctMTIw/MC04MC5qcGc',
		content: 'A drawing made to signify peace among all Earthlings',
		description: 'A test post',
		geolocation: { latitude: '20000', longitude: '500000' },
	},
	{
		id: '5',
		name: 'Penda Svane',
		imgURL:
			'https://imgs.search.brave.com/J5KlBVidIoXnwnM1h5-KJtX46hKHHfvU7l2E3-_unlk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0Nq/Z1M1NXRHb3Y1ZHFD/bkJ2aUhkb1ctMTIw/MC04MC5qcGc',
		content: 'A drawing made to signify peace among all Earthlings',
		description: 'A test post',
		geolocation: { latitude: '20000', longitude: '500000' },
	},
	{
		id: '6',
		name: 'Penda Svane',
		imgURL:
			'https://imgs.search.brave.com/J5KlBVidIoXnwnM1h5-KJtX46hKHHfvU7l2E3-_unlk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0Nq/Z1M1NXRHb3Y1ZHFD/bkJ2aUhkb1ctMTIw/MC04MC5qcGc',
		content: 'A drawing made to signify peace among all Earthlings',
		description: 'A test post',
		geolocation: { latitude: '20000', longitude: '500000' },
	},
];
