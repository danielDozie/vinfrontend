//WhatWeOffer section
export const titleVariant = {
    visible: { opacity: 1, x:0, transition: { duration: .5, ease: 'easeIn' } },
   // invisible: { opacity: 0, x:-150, transition: { duration: 1, fade: 'fadeOut', delay: .5 } },
    hidden: { opacity: 0, x:-150 },
  }
export const descriptionVariant = {
    visible: { opacity: 1, x:0, transition: { duration: .5, ease: 'easeIn', delay: .5 } },
   // invisible: { opacity: 0, x:-150, transition: { duration: 1, ease: 'easeOut',  } },
    hidden: { opacity: 0, x:-150 },
  }
export const listVariant = {
    visible: (custom: number) => ({ opacity: 1, x:0, transition: { duration: 1, ease: 'easeIn', delay: custom * .35 } }),
    //invisible: (custom: number) => ({ opacity: 0, x:-150, transition: { duration: .5, ease: 'easeOut', delay: custom * .1 } }),
    hidden: { opacity: 0,x:-150, },
    hover: { scale: 1.02 },
}
export const readMoreVariant = {
    visible: { opacity: 1, x:0, transition: { duration: .5, ease: 'easeIn', delay: 3.7 } },
   // invisible: { opacity: 0, x:-150, transition: { duration: 1, ease: 'easeOut',  } },
    hidden: { opacity: 0, x:-150 },
    
}

//History Report

export const historySectionVariant = {
  visible : { opacity: 1, transition: { duration: 1, fade: 'fadeIn'} },
  hidden: { opacity: 0 }
};

export const historyIconsVariant = { 
  visible: (custom: number) => (
    { opacity: 1, 
      y:0,
      transition: 
      { duration: 1, fade: 'fadeIn', delay: custom * 0.5,},
     }
    ),
  hidden: { opacity: 0, y:150 },
  hover: { scale: 1.1, transition: { ease: 'easeIn' } },
  tap: { scale: 0.9, transition: { ease: 'easeInOut' } },
};

//Benefit Secction
export const benefitTitleVariant = {
  hidden: { opacity: 0, x: -150 },	
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } },
 // invisible: { opacity: 0, x:-150, transition: { duration: 1, ease: 'easeInOut' } }
}
export const benefitDescriptionVariant = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut', delay: .5 } },
 // invisible: { opacity: 0, x:-150, transition: { duration: 1, ease: 'easeInOut' } }
}
export const benefitConsultUsVariant = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut', delay: 1 } },
 // invisible: { opacity: 0, x:-150, transition: { duration: 1, ease: 'easeInOut' } }
}
export const buttonVariant = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 1.5 } },
  //invisible: { opacity: 0, y: -5, transition: { duration: 1, ease: 'easeInOut' } }
}


//Review Section
export const reviewTitleVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: .5, ease: 'easeIn', delay: .2} },
//  invisible: { opacity: 0, transition: { ease: 'easeOut'} }
}
export const reviewDescriptionVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: .5, ease: 'easeIn', delay: .5} },
  //invisible: { opacity: 0, transition: { ease: 'easeOut'} }
}

export const reviewVariant = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({ opacity: 1, transition: { duration: .5, ease: 'easeIn', delay: custom * .2} }),
  //invisible: { opacity: 0, transition: { ease: 'easeOut'} },
  hover: { scale: 0.95, transition: { duration: .5, ease: 'easeIn'} }
}