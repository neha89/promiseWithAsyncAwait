const posts = [
    {title : 'Post One', body: 'This is post one'},
    {title : 'Post Two', body: 'This is post two'}
];



function getPosts(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let output = '';
            posts.forEach((post, index)=>{
                output += `<li>${post.title}</li>`
            });
            resolve(output);
        }, 1000)
    })
   
}

async function createPost(post){
    const createNewPost = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve(posts);
            }else{
                reject("Error while creating Post");
            }
        }, 2000);
    })
   let postDetail = await createNewPost;
   return postDetail;
}


async function deletePost(){
    let deleteLatestPost =  new Promise((resolve, reject)=>{
     setTimeout(()=>{
           if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(posts);
            } else {
                reject("ERROR");
            }
    }, 1000)
});
let deleteLastPost = await deleteLatestPost;
return deleteLastPost;
}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            user.lastactivitytime = new Date().getTime();
            

           resolve(user.lastactivitytime);
        }, 3000);

    })
}

createPost().then((m)=>{
    console.log(m);
})
deletePost().then((m)=>{
    console.log(m);
})
// Promise.all([createPost({title: 'Post Three', body: 'This is post three'}), updateLastUserActivityTime()])
// .then(([createPostResolve, updateLastUserActivityTimeResolve])=>{
     
//     getPosts();
    
//     console.log(createPostResolve, updateLastUserActivityTimeResolve);
//     deletePost().then(()=>{
//         console.log(posts);
//     });
        
// })













