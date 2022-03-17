import { IonCard, IonCardContent, IonCardHeader, IonContent, IonImg, IonPage, IonTitle, useIonLoading } from '@ionic/react';
import { useEffect, useState } from 'react';
import './PostsContainer.css';
import ProfileInfo from './ProfileInfo';
import '../../theme/tailwind.css';
import '../../theme/additional.css';
interface PostsProps {
	name: string;
}

const PostsContainer = ({ userName }: any, { userTitle }: any) => {
	const [user, setUser] = useState<any>({});
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [imageFile, setImageFile] = useState<any>({});
	const [showLoader, dismissLoader] = useIonLoading();

	useEffect(() => {
		setName(userName);
		setTitle(userTitle);
	});
	return (
		<IonPage>
			<ProfileInfo name={userName} title={userTitle} />
			<div className='overflow-auto h-4/5'>
				{exampleARPosts.map((post) => {
					return (
						<IonCard key={post.id} className="profilePost bg-color-purple-900">
							<IonCardHeader>{post.name}</IonCardHeader>
							<IonCardContent>
								<h4>{post.description}</h4>
								<IonImg src={post.imgURL} className="postImage" />

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
