import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';




function RenderDish({dish}){
    if(dish!=null){
        return(
            <Card>
                <CardImg width ="100%" src={dish.image} alt={dish.name}/> 
                <CardBody>
                    <CardTitle><strong>{dish.name}</strong></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }else{
        return(<div></div>)
    }
}

function RenderComments({comments}){
        
    if(comments!=null){
        const commentsList = comments.map((comments) => {
        return(
            <li>
                <p>{comments.comment}</p>
                <p>{new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
            </li>
            );    
        });

        return(

            <ul className="list-unstyled">
                <h4>Comments</h4>
                {commentsList}  
            </ul>
        )
    }else{
        return(<div></div>)
    }
}



const DishDetail = (props) => {
  
        if(props.dish!=null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 m-1 col-md-5 text-left">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 m-1 col-md-5 text-left">
                            <RenderComments comments ={props.dish.comments}/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(<div></div>)
        }
}

export default DishDetail;