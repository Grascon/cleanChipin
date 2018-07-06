import axios from "axios";

export default {
  // Gets all activity
  getActivities: function () {
    return axios.get("/api/activitiesRoutes");
  },

 // For saving(favoriting) activiy
  // saveActivity: function (activityData){
  //   return axios.get("/api/activitiesRoutes/saveActivity", activityData);
  // },
 
  // For saving(marking as attending) an activity
  saveAttending: function (attendingData){
    return axios.post("/api/activitiesRoutes/saveAttending", attendingData);
  },
  // Gets the activity with the given id
  getActivity: function (id) {
    return axios.get("/api/activitiesRoutes/" + id);
  },
  // Deletes the activity with the given id
  deleteActivity: function (id) {
    return axios.delete("/api/activitiesRoutes/" + id);
  },
  // get list of host activities for user
  getHostActivities: function(id){
    return axios.get("/api/activitiesRoutes/hostActivities/" + id);
  },

  // Delete host activity from admin dashboard
  deleteHostActivity: function(id) {
    return axios.delete("/api/activitiesRoutes/deleteHostActivity/" + id);
  },
  // Login route
  getUserLogin: function (loginData) {
    return axios.post("/auth/userlogin", loginData);
  },
  
  // Get active/logged-in user
  activeUser: function () {
    // console.log(localStorage.getItem('jwtToken'));
    // store jwt token in axios default headers for request
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.post("/jwt/logincheck");
  },
  //Post Events router
  postEvent: function (activityData, err) {
    if (err) {
      console.log(err);
    }
    return axios.post("/api/activitiesRoutes", activityData);
  },

  // Post Organization
  postOrg: function () {
    return axios.post("/api/organization");
  },
  //Post User
  postUser: function (userData, err) {
    if (err) {
      console.log(err);
    }
    console.log("arrived at utils api")
    return axios.post("/auth/register", userData);
  }
};
