import { updateProfile } from "./slice";
import { useSelector } from "react-redux";
function ListPage(){
    var staticImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU1M0QyQjdFMEZGMzExRTVBNUVBQ0QwN0EyM0Q0MzcwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU1M0QyQjdGMEZGMzExRTVBNUVBQ0QwN0EyM0Q0MzcwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTUzRDJCN0MwRkYzMTFFNUE1RUFDRDA3QTIzRDQzNzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTUzRDJCN0QwRkYzMTFFNUE1RUFDRDA3QTIzRDQzNzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz60LO4jAAANNklEQVR42oRZ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"
        var getListdata=useSelector((state) => state.profile[0].profiledata);
    console.log(getListdata)
    return(
     <table className="userTable">
        <tr>
            <th>Profile</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Gender</th>
      <th>Occupation</th>
      <th>Gmail</th>
    
  </tr>
  {getListdata.map(function(value){
    return(
        <tr>
            <td className="user-profileimage">
              <img src={value.userprofile == '' ? staticImage:value.userprofile} className="" alt="user-image"/>
                    
            </td>
            <td>
              <span className="">{value.fnName}</span>
                    
            </td>
            <td>
              <span className="">{value.lastname}</span>
                    
            </td>
            <td>
              <span className="">{value.gender}</span>
                    

            </td>
            <td>
              <span className="">{value.occupation}</span>
                    
            </td>
            <td>
              <span className="">{value.mail}</span>
                    
            </td>
        </tr>
    )

  })}
     </table>
       
        
    )
}
export default ListPage