// import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { useState } from 'react';

function CommentArea() {
//  state = {
//    comments: [],
//    isLoading: false,
//    isError: false,
//  }

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

//   componentDidMount = async () => {
//     try {
 //      let response = await fetch(
//         'https://striveschool-api.herokuapp.com/api/comments/' +
//           this.props.asin,
//         {
//           headers: {
//             Authorization:
//               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg2NzRiYjBmZTRlMjAwMTU2Njg4MTQiLCJpYXQiOjE3MzY4NjQ5NTUsImV4cCI6MTczODA3NDU1NX0.wJkpyZLEQ975h9H5XA_aJxnKsNWTb8hJQlE6lZ0RU6M',
//           },
//         }
//       )
//       console.log(response)
//       if (response.ok) {
//         let comments = await response.json()
//         this.setState({ comments: comments, isLoading: false, isError: false })
//       } else {
//         console.log('error')
//         this.setState({ isLoading: false, isError: true })
//       }
//     } catch (error) {
//       console.log(error)
//       this.setState({ isLoading: false, isError: true })
//     }
//   }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true,
      })
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' +
            this.props.asin,
          {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg2NzRiYjBmZTRlMjAwMTU2Njg4MTQiLCJpYXQiOjE3MzY4NjQ5NTUsImV4cCI6MTczODA3NDU1NX0.wJkpyZLEQ975h9H5XA_aJxnKsNWTb8hJQlE6lZ0RU6M",
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          this.setState({
            comments: comments,
            isLoading: false,
            isError: false,
          })
        } else {
          this.setState({ isLoading: false, isError: true })
        }
      } catch (error) {
        console.log(error)
        this.setState({ isLoading: false, isError: true })
      }
    }
  }

  
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
}

export default CommentArea
