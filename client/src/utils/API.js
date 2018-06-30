import axios from "axios";

export default {
  // Gets all activity
  getActivities: function () {
    return axios.get("/api/activitiesRoutes");
  },

  // For saving(favoriting) activiy
  saveActivity: function(activityData, err) {
    if (err){
      console.log(err);
    }
    return axios.post("/api/activitiesRoutes/", activityData);
  },

  // For saving(marking as attending) an activity
  saveAttending: function(attendingData, err) {
    if (err){
      console.log(err);
    }
    return axios.post("api/activitiesRoutes/", attendingData);
  },
  
  // Gets the activity with the given id
  getActivity: function (id) {
    return axios.get("/api/activitiesRoutes/" + id);
  },
  // Deletes the activity with the given id
  deleteActivity: function (id) {
    return axios.delete("/api/activitiesRoutes/" + id);
  },
  // Saves an activity to the database
  // saveActivity: function (activityData) {
  //   return axios.post("/api/activities", activityData);
  // },
  //Login route
  getUserLogin: function () {
    return axios.get("/api/users");
  },
  //Post Events router
  postEvent: function (activityData, err) {
    if (err){
      console.log(err);
    }
    return axios.post("/api/activitiesRoutes", activityData);
  },
  //Post Organization
  postOrg: function () {
    return axios.post("/api/organization");
  },
  //Post User
  postUser: function () {
    return axios.post("/api/user");
  }
};
