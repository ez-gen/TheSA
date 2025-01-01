/scholars-academy
  ├── index.html             // Homepage with Admin Login
  ├── dashboard.html         // Class Dashboard
  ├── student-list.html      // List of Students in a Class
  ├── student-profile.html   // Student Profile Page
  ├── add-student.html       // Add New Student Page
  ├── styles.css             // CSS Styles
  ├── scripts/
       ├── firebase-config.js  // Firebase Initialization
       ├── auth.js             // Login and Authentication Logic
       ├── dashboard.js        // Dashboard and Class Logic
       ├── student-list.js     // Student List Logic
       ├── student-profile.js  // Student Profile and Fee Logic
       ├── add-student.js 
       // Add New Student Logic
/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  margin: 0 0 15px 15px;
  --c:#0000 calc(100%/3),#046D8B 0 calc(2*100%/3),#0000 0;
  --c1:linear-gradient(90deg,var(--c));
  --c2:linear-gradient( 0deg,var(--c));
  background: var(--c1),var(--c2),var(--c1),var(--c2);
  background-size: 300% 4px,4px 300%;
  background-repeat: no-repeat;
  animation: l12 1s infinite linear;
}
.loader:after {
  margin: 15px 15px 0 0;
  transform: scale(-1,-1);
}
@keyframes l12 {
  0%   {background-position: 50%  0,100% 100%,0    100%,0 0}
  25%  {background-position: 0    0,100% 50% ,0    100%,0 0}
  50%  {background-position: 0    0,100% 0   ,50%  100%,0 0}
  75%  {background-position: 0    0,100% 0   ,100% 100%,0 50%}
 75.01%{background-position: 100% 0,100% 0   ,100% 100%,0 50%}
  100% {background-position: 50%  0,100% 0   ,100% 100%,0 100%}
} 





  /* Loader overlay */
    #loader-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      justify-content: center;
      align-items: center;
    }

    /* Spinner with logo */
    .loader {
      position: relative;
      width: 80px;
      height: 80px;
      border: 5px solid #f3f3f3; /* Light grey */
      border-top: 5px solid #3498db; /* Blue */
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    /* Logo inside spinner */
    .loader img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    /* Loader text */
    #loader-text {
      margin-top: 10px;
      color: #ffffff;
      font-size: 18px;
    }