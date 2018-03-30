import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAll } from "../../actions";
import circle from "../../circles.svg";
import googlepic from "../../google.jpg";

const All = ({ all, getAll }) => {
  

    const styles = {
        circle: {
          height: "300px",
          padding: "20px"
        },
        photo: {
            width: "70px",
            padding: "20px"
          },
        button: {
            borderRadius: "8px",
            padding: "10px",
            cursor: "pointer"
          },
        flexin: {
        //   display: "flex-wrap"
        },
        card: {
            display: "inline-block",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          width: "180px",
          margin: "10px",
          marginTop: "40px",
          zIndex: "1",
          animation: "dropin 3s"
        }
      };

    let greeting

    if (all.length > 0) {
        greeting = <div></div>    
    } else {
        getAll()
        greeting = (
            <div>
                <h2>Loading photos...</h2>
                <img src={circle} style={styles.circle} alt="" />
            </div>
        )
    }

    


//   const googlelist = google.map(el => {
//     return <li key={el}>{el}</li>;
//   });

//   const googledisplay =
//     google.length > 0 ? (
//       <ul>{googlelist}</ul>
//     ) : (
//       <div>
//         <div>Robot Thinking...</div>
//         <div>
//           {" "}
//           <img src={circle} alt="" />
//         </div>
//       </div>
//     );

//   const clarifailist = clarifai.map((el, i) => {
//     if (i < 10) {
//       return <li key={el}>{el}</li>;
//     }
//   });

//   const clarifaidisplay =
//     clarifai.length > 0 ? (
//       <ul>{clarifailist}</ul>
//     ) : (
//       <div>
//         <div>Robot Thinking...</div>
//         <div>
//           {" "}
//           <img src={circle} alt="" />
//         </div>
//       </div>
//     );

//   const watsonlist = watson.map(el => {
//     return <li key={el}>{el}</li>;
//   });

//   const watsondisplay =
//     watson.length > 0 ? (
//       <ul>{watsonlist}</ul>
//     ) : (
//       <div>
//         <div>Robot Thinking...</div>
//         <div>
//           {" "}
//           <img src={circle} alt="" />
//         </div>
//       </div>
//     );

  return (
    <div>
        <div>
            {greeting}
        </div>
      <div style={styles.flexin}>
            {all.map(photo => <div key={photo.url} style={styles.card} className="Hover-cards"> <img style={styles.photo} src={photo.url} alt=""/> </div>)}


        {/* <div>
          <img src={photo_url} style={styles.photo} alt="" />
        </div>
        <div style={styles.card}>
          <h4>Google</h4>
          <div>{googledisplay}</div>
        </div>
        <div style={styles.card}>
          <h4>Clarifai</h4>
          <div>{clarifaidisplay}</div>
        </div>
        <div style={styles.card}>
          <h4>Watson</h4>
          <div>{watsondisplay}</div>
        </div> */}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAll: getAll
    },
    dispatch
  );

const mapStateToProps = state => ({
  all: state.all,
});

export default connect(mapStateToProps, mapDispatchToProps)(All);