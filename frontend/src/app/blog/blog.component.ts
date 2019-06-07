import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  url: string = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40junaidrahim";
  constructor(private http: HttpClient) { }

  // method to convert 2019-6-6 to 6th June 2019
  getDate(date: string) : string{
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Spetempber",
      "October",
      "November",
      "December" ]
    

    var d = date.split(" ")[0].split("-");
    var month = months[parseInt(d[1])-1];
    
    var day: string;
    
    if(d[2]=="2"){
      day = "2nd"
    }
    else if (d[2]=="3") {
      day = "3rd";
    }
    else {
      day = d[2] + "th";
    }

    return `${day} ${month} ${d[0]}`;

  }


  ngOnInit() {
      this.http.get(this.url).subscribe((data)=>{
        const posts = data["items"];
        
        for(var i=0; i<1; i++){
          const title = posts[i]["title"]
          const link = posts[i]["link"]
          const date = this.getDate(posts[i]["pubDate"])

          var card_string = `
          <div class="card">
                <a href="${link}">${title}</a>
                <p>Published ${date}</p>
                <i class="fab fa-medium-m"></i>
          </div>
          `

          document.getElementById("recent_posts_container_id").innerHTML += card_string;
        }


      });

      document.getElementById("recent_posts_container_id").innerHTML = "Apple";
  }

}
