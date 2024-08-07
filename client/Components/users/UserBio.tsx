import { follwUser, getUser, unFollwUser } from '@/Api/userApi'
import React, { useEffect, useMemo, useState } from 'react'
import { useAppSelector } from '@/Redux/Store'
import { BiCalendar } from 'react-icons/bi'
import { format } from 'date-fns'
import EditModel from '../Modals/EditModel'
import useLoginModal from '@/hooks/UseLoginModal'
import toast from 'react-hot-toast'
import LoadingModal from '../Modals/LoadingModel'

interface UserProp {
    userId: any
}

const UserBio: React.FC<UserProp> = ({ userId }) => {
    const { user } = useAppSelector((state) =>
        state.user
    )
    const [editModal, setEdimodal] = useState<any>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const [user1, setUser1] = useState<any>()
    const [following, setFollowing] = useState<boolean>(false)

    const loginModal = useLoginModal()

    const createsAt = useMemo(() => {
        if (!user?.created_at) {
            return null
        } else {
            return format(new Date(user.created_at), 'MMMM yyyy')
        }
    }, [user?.created_at])
    const CheckUser = async () => {
        if (user?.id && user1?.id) {
            const res = await follwUser(user1?.id, user?.id)
            if (res.success) {
                toast.success(res.message)
            }
        } else {
            loginModal.onOpen()
        }
    }
    const unfollw = async () => {
        setFollowing(false)
        if (user?.id && user1?.id) {
            const res = await unFollwUser(user1?.id, user?.id)
            if (res?.success) {
                toast.success(res.message)
            }
        } else {
            loginModal.onOpen()
        }
    }

    useEffect(() => {
        getUser(userId).then((data: any) => {
            if (data) {
                setUser1(data.data.data)
                setFollowing(false)
                user1?.followers.findIndex((rt: any) => {
                    if (rt.followingId === user?.id) {
                        setFollowing(true)
                    } else {
                        setFollowing(false)
                    }
                })
            } else {
                setLoading(false)
                return
            }
        })

    }, [user1, user, userId])
    function fun() {
        setEdimodal(true)
    }
    return (
        <>
            {/* <LoadingModal loading={loading} /> */}
            <div className='border-b-[1px] border-neutral-800 pb-4'>

                <div className='flex justify-end p-2'>
                    {
                        userId == user?.id ? (
                            <>
                                <p className='text-white cursor-pointer' onClick={() => fun()} >Edit profile</p>
                                <EditModel
                                    editModal={editModal}
                                    setEdimodal={setEdimodal}
                                    data={user}
                                />
                            </>
                        ) :
                            (
                                following ?
                                    <button
                                        onClick={unfollw}
                                        className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 bg-white text-black border-black text:md px-4 py-2`}>
                                        UnFollw
                                    </button> :
                                    <button
                                        onClick={CheckUser}
                                        className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 bg-white text-black border-black text:md px-4 py-2`}>
                                        Follw
                                    </button>
                            )
                    }
                </div>
                <div className='mt-8 px-4'>
                    <div className='flex flex-col'>
                        <p className='text-white text-2xl font-semibold'>
                            {user1?.name}
                        </p>
                        <p className='text-md text-neutral-500'>
                            @{user1?.email}
                        </p>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <p className='text-white'>
                            {user?.id == user1?.id ? user?.bio || "enter your biogrophy" : user1?.bio || 'bio not added yet'}
                        </p>
                    </div>
                    <div className='flex flex-row items-center mt-4 gap-3 text-neutral-500'>
                        <BiCalendar size={24} />
                        <p className='text-white'>
                            joined {createsAt}
                        </p>
                    </div>
                    <div className='flex flex-row items-center mt-4 gap-6'>
                        <div className='flex flex-row items-center gap-1'>
                            <p className='text-white'>
                                {user1?.following ? Object.keys(user1?.following).length : ''}
                            </p>
                            <p className='text-neutral-500'>
                                Following
                            </p>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                            <p className='text-white'>
                                {user1?.followers ? Object.keys(user1?.followers).length : ''}
                            </p>
                            <p className='text-neutral-500'>
                                Followers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserBio