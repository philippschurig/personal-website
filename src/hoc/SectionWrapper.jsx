const SectionWrapper = (Component, idName, headText, subText, bgColor = 'bg-themeGrey-200') =>
  function HOC() {
    return (
    <section id={idName} className={`${bgColor} px-4 py-24`}>
      <div className='max-w-7xl mx-auto'>
        <div className='relative flex justify-center text-center mb-16'>
          <h2 className='section-head-text select-none'>{headText}</h2>
          <p className='section-sub-text'>
            {subText}
            <span className='border-b-4 border-themeOrange-100 px-3 mx-auto block w-24 rounded'></span>
          </p>
        </div>

        <Component />
      </div>
    </section>
    )
}

export default SectionWrapper