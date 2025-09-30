const ContentFrame = ({ children, direction }) => {
    return (
      <div className={( direction == 'leftImage') ? 'contentFrame left-img' : 'contentFrame'}>
        {children}
      </div>
    );
};
  
export default ContentFrame;