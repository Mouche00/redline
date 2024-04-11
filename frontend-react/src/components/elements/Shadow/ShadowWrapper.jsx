const ShadowWrapper = ({ children, className = '' }) => {
    return (
        <div className={`${className} relative z-10`}>
            {children}
        </div>
    )
}

export default ShadowWrapper