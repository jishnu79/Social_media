import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='container-fluid flex justify-center items-center'>
      <div className='w-[98%] flex   '>
        <div className='w-[80%]  gap-12 flex justify-start items-center'>
          <h1 className='font-bold text-[36px] '>
            Facebook
          </h1>
          <div>
            <input className='rounded-lg' type="text" />
          </div>
          <div className='flex gap-7  items-center justify-center'>
            <Link to='/register'>
              <p className=''>home</p>
            </Link>
            <p className=''>home</p>
            <p className=''>home</p>
            <p className=''>home</p>
          </div>
        </div>
        <div className='flex justify-start items-center gap-3 w-[20%]'>
          <div >
            <img className='w-12 h-12 rounded-[50%]' src="data:image/jpeg;base64,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" alt="" />
          </div>
          <h1>kannan</h1>
          <h1 className='text-blue-700 ml-auto'>Switch</h1>
        </div>
      </div>
    </div>
  )
}

export default Header