import React,{useState,useEffect} from "react";


const FriendRequest=()=>{
    const API = import.meta.env.VITE_BASE_KEY;
    const [friendRequest, setFriendRequest] = useState([])
    useEffect(() => {
        const fetchFriendRequests = async () => {
          try {
            const response = await fetch(`${API}/profiles/1/connections/`);
            if (!response.ok) {
              throw new Error(`Request failed with status: ${response.status}`);
            }
            const data = await response.json();
            setFriendRequest(data);
            // console.log(friendRequest);
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
        fetchFriendRequests();
      }, [friendRequest]);

      return(<>
      <div>
              <h3> Friend Request</h3>
              {friendRequest.map(request => (
                <div id='request' key={request.id}>
                  <p><img className='request-photo' src={request.profile_img} /><h6>{request.username} sent you a friend request.</h6></p>
                  <p><button id="accept">✅</button> Accept <br></br><button id="decline"> ❌ </button>Decline</p>

                </div>
              ))}
            </div>
      
      
      
      </>)

}
export default FriendRequest