import React, { Component } from 'react'
import '../App.css';
import Search from '../components/Search'
import Results from '../components/Results'

class SearchContainer extends Component {

  constructor(props){
    super()
    this.state = {
      search: '',
      searched: false,
      results: []
    }
    // this.onInputChange = this.onInputChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
  	event.preventDefault()
    this.setState({
      search: event.target.value
    })
  }

  onFormSubmit(event) {
  	event.preventDefault()
    console.log("value of form " + this.state.search)
    let searchResponse = { "data": [
        {
          "type": "gif",
          "id": "iuHaJ0D7macZq",
          "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
          "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
          "rating": "pg",
          "images": {
            "fixed_height": {
              "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
            }
          }
        },
        {
          "type": "gif",
          "id": "Z1kpfgtHmpWHS",
          "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
          "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
          "rating": "g",
          "images": {
            "fixed_height": {
              "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
            }
          }
        }
      ],
      "meta": {
        "status": 200,
        "msg": "OK"
      },
      "pagination": {
        "total_count": 1947,
        "count": 25,
        "offset": 0
      }
    };

    this.setState({
  		searched: true,
  		results: searchResponse.data
  	})
  }

  

  render() {
  	return (
  		<div className="App">
			<Search
				onFormSubmit={(event) => this.onFormSubmit(event)}
				onInputChange={(event) => this.onInputChange(event)}
				search={this.state.search}
			/>
			<Results
          		searchResults={this.state.results}
        	/>
        </div>
  	)
  }




}


export default SearchContainer