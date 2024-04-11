import { Box, Drawer } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { leftDrawer } from '../../store/drawer/left-drawer.reducer';


const RightDrawer = ({ component, config }: any) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.leftDrawer);
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    const ds = { ...state, ['right']: open }
    dispatch(leftDrawer(ds.right))
  };
  return (
    <>

      <Drawer
        anchor={'right'}
        open={state.right}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 550 }}
          role="presentation"
        >
          <div className="w-full  h-12 bg-teal-500 flex">
            <div className="w-5/6 ">
              <h1 className='text-xl pt-3 pb-3 font-bold text-white pl-4'>{config.title}</h1>
            </div>
            <div className="w-1/6">
              <button type='button' className='text-white bg-red-500  py-1 px-3 mt-2 rounded' onClick={toggleDrawer(false)}>close</button>
            </div>
          </div>

          <div className="  w-full ">
            {/*  component */}
            {component}
          </div>
        </Box >
      </Drawer >
      <button onClick={() => { dispatch(leftDrawer(true)) }} className='text-white bg-teal-500 py-1 px-2  mb-1 mt-1 ml-1 rounded inline-flex items-center'>{config.buttonIcon} {config.buttonTitle}</button>


    </>
  )
}

export default RightDrawer