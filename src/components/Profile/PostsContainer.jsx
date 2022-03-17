import { getAuth } from '@firebase/auth';
import { equalTo, get, onValue, orderByChild, query } from 'firebase/database';
import { IonCard, IonCardContent, IonCardHeader, IonImg, IonLabel, IonList, IonListHeader, IonPage, IonTitle, useIonLoading } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUserRef, postsRef } from '../../firebase-config';
import './PostsContainer.css';
import ProfileInfo from './ProfileInfo';


const PostsContainer = () => {
	const auth = getAuth();
	const currentUserId = getAuth().currentUser.uid;
	const [user, setUser] = useState({});
	const [posts, setPosts] = useState([]);
	const params = useParams();
	// Hacky hack placeholder solution
	const userId = currentUserId;
	console.log(userId);
	console.log(posts);



	useEffect(() => {
		async function getUserDataOnce() {
			const snapshot = await get(getUserRef(userId));
			const userData = snapshot.val();
			setUser({
				id: userId,
				...userData
			});
			console.log(user);
			return userData;
		}

		// I understand the error occurs here because the implementation of userPage on the example code is used in context with selected a post and showing a user
		// based on the post and the id is passed as a paramater (params) through the router and is accessed via useParams()

		// I am too tired right now to refactor the profile page so it can just send the userId to this component for this to work, so yeah gg - I'm done
		// 

		async function listenOnChange() {
			console.log("userId", userId);
			console.log("test");
			const postsByUserId = query(postsRef, orderByChild("uid"), equalTo(userId));
			const userData = await getUserDataOnce();

			onValue(postsByUserId, async snapshot => {
				const postsArray = [];
				snapshot.forEach(postSnapshot => {
					const id = postSnapshot.key;
					const data = postSnapshot.val();
					const post = {
						id,
						...data,
						user: userData
					};
					postsArray.push(post);
				});
				setPosts(postsArray.reverse());
			});
		}
		listenOnChange();
	}, [userId]);


	return (
		<IonPage>
			<ProfileInfo />
			<IonListHeader>
				<IonLabel>{posts.length ? "Users Posts" : "No posts yet"}</IonLabel>
			</IonListHeader>
			<IonList>
				{posts.map((post) => {
					return (
						<IonCard key={post.id} className="profilePost">
							<IonCardHeader>{post.name}</IonCardHeader>
							<IonCardContent>
								<h4>{post.description}</h4>
								<IonImg src={post.imgURL} alt={post.content} className="profilePostImg" />
							</IonCardContent>
						</IonCard>
					);
				})}
			</IonList>
		</IonPage>
	);
};

export default PostsContainer;
