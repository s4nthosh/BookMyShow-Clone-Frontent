import React ,{useRef,useState}from 'react'
import { IoCameraOutline } from "react-icons/io5";


const Profile = () => {

  const [profileImg, setProfileImg] = useState(null);
  const profileImgRef = useRef(null);


  const handleImgChange = (e, state) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				state === "profileImg" && setProfileImg(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

  return (
    <div className='bg-gray-300 w-full'>
    <div className='hidden md:flex max-w-screen-xl mx-auto'>
      <div className='header h-10 w-full bg-gray-300'>
          <div className='w-full flex items-center h-full text-black gap-4 px-2'>
            <p>Your Orders</p>
            <p>Stream Library</p>
            <p>QuickPay</p>
            <p>Reward</p>
            <p>Profile</p>
            <p>Saved Device</p>
          </div>
      </div>
    </div>

    <div className='EditProfile  bg-primary'>
        <div className='max-w-screen-md mx-auto h-full bg-primary py-5'>
              <div className='bg-white h-full w-full rounded-md overflow-hidden'>
                  <div className='Account-details profile'>
                    <div className='profile-bg h-28 relative  bg-white w-full '>
                    <div className='profile w-full left-0 absolute bg-orange-500 h-24 top-0'>
                      <div className='md:max-w-screen-sm md:mx-auto w-full mx-2 h-full'>
                        <div className='flex items-center gap-4 pt-5'>
                          <input type='file' hidden ref={profileImgRef} onChange={(e)=>handleImgChange(e,'profileImg')}></input>
                          <div className="avatar">
                            <div className="w-24 rounded-full relative">
                              <img src={`${profileImg ? profileImg :"/avatar-placeholder.png"}`} alt='broken' />

                                <div className='editimg absolute w-full h-full bg-black/[0.3] top-0 left-0 flex items-center justify-center'>
                                   <IoCameraOutline className='text-[20px] cursor-pointer text-white' onClick={() => profileImgRef.current.click()}/>

                                </div>
                              </div>
                            </div>
                            <div className='profie_name text-white font-bold text-lg'>
                              <p>Hi,santhosh</p>
                            </div>
                        </div>

                        
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className='acc-details h-full md:max-w-screen-sm md:mx-auto mx-auto w-full bg-white'>
                            <h1 className='my-5 text-black px-2 md:px-0  font-bold text-lg'>Account Details</h1>
                            <div className='py-2 flex flex-col gap-5 px-2 md:px-0 text-black'>
                                <div className='email flex justify-between'>
                                  <h1>Email Address</h1>
                                  <p className='font-semibold'>example123@gmail.com</p>
                                  <button className='text-text_color text-sm'>Edit</button>
                                </div>
                                <div className='number flex justify-between'>
                                <h1>Mobile Number</h1>
                                  <p className='font-semibold'>+91 1234567890</p>
                                  <button className='text-text_color text-sm'>Edit</button>
                                </div>
                            </div>
                        </div>
              </div>

          <div className='personal details bg-white w-full h-screen mt-4 text-black rounded-md overflow-hidden'>
            <div className='max-w-screen-sm mx-auto'>
            <h1 className='my-5 text-black px-2 md:px-0 font-bold text-lg'>Personal Details</h1>
              <form className='flex justify-between px-2 md:px-0 items-center w-full flex-wrap gap-6'>
                 <label>First Name</label>
                 <input type="text" placeholder="Enter first name here" className="input input-bordered border-gray-400 w-full max-w-md" />
                 <label>Last Name</label>
                 <input type="text" placeholder="Enter Last name here" className="input input-bordered border-gray-400 w-full max-w-md" />
                 <label>BirthDay(Optional)</label>
                 <input type="date" placeholder='dd/mm/yyyy' className="input input-bordered border-gray-400 w-full max-w-md" /> 
                 <label>Identity(Optional)</label>
                 <input type="text" placeholder="maleorfemale" className="input input-bordered border-gray-400 w-full max-w-md" />
                 <label>City / Town</label>
                 <input type="text" placeholder="Enter your town/city" className="input input-bordered border-gray-400 w-full max-w-md" />
                 <label className='w-1/4' >State</label>
                 <input type="text" placeholder="Enter your town/city" className="input input-bordered border-gray-400 w-full max-w-md" />
                 
                 <button className='btn bg-text_color border-none text-white'>Save Changes</button>
              </form>
          </div>
          </div>    
        </div>
    </div>

    </div>
  )
}

export default Profile