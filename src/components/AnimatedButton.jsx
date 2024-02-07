import { motion } from "framer-motion"
import { useAnimationControls } from "framer-motion"

export default function AnimatedButton(){
    const flipControls=useAnimationControls()

    const handleClick=()=>{
        flipControls.start("flip")
    }

    
    return(
        <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
          gap: "0.8rem",
        }}
      >

        <button onClick={handleClick} className="example-button"> Flip it </button>

        <motion.div style={{
            width:150,
            height:150,
            background: "black",
            borderRadius:"15px"
        }}
        variants={{
            initial:{
                rotate:'0deg'
            },
            flip:{
                rotate:'360deg'
            },
        }}
        whileHover="flip"
        animate={flipControls}
        >
            
        </motion.div>






      </div>
    )
}