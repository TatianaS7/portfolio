import React from "react";

export default function StackButtons({ stack, idx }) {
    return (
        <div style={styles.flex}>
            <div key={idx}>
                <img src={stack.image} style={styles.icon}/>
            </div>
            {/* <div style={styles.tech}>
                {stack.name}
            </div> */}
        </div>
    )
}

const styles = {
    icon: {
        height: '2em',
        width: '2em',
        margin: '5px',
    },
    tech: {
        fontSize: '12pt',
        margin: '5px',
        fontWeight: 'bold',
        color: "black"
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: '#0064005e',
        borderRadius: '10px',
        color: 'white',
        padding: '5px',
        height: '3em',
    }
}