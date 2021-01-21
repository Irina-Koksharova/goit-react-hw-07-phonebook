const mainContainer = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  width: '950px',
  justifyContent: 'space-between',
  overflow: 'hidden',
  padding: '50px',
};

const subContainer = {
  width: '400px',
  height: '670px',
  padding: '30px 30px',
  backgroundImage: 'linear-gradient(to bottom, #c5796d, #dbe6f6)',
  boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  borderRadius: '10px',
};

export { mainContainer, subContainer };
