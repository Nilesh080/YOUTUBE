import React from "react";

const commentsData = [
  {
    name: "Nilesh",
    text: "Lorem ipsum dolor sit amet consectetur",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Eo_circle_blue-grey_white_letter-n.svg/768px-Eo_circle_blue-grey_white_letter-n.svg.png?20200417105508",
    replies: [
      {
        name: "Anujeet",
        text: "Lorem ipsum dolor sit amet consectetur",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eo_circle_blue-grey_white_letter-a.svg/768px-Eo_circle_blue-grey_white_letter-a.svg.png?20200417105258",

        replies: [
          {
            name: "Nilesh",
            text: "Lorem ipsum dolor sit amet consectetur",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Eo_circle_blue-grey_white_letter-n.svg/768px-Eo_circle_blue-grey_white_letter-n.svg.png?20200417105508",
            replies: [],
          },
          {
            name: "Mervis",
            text: "Lorem ipsum dolor sit amet consectetur",
            src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eo_circle_blue-grey_white_letter-m.svg/768px-Eo_circle_blue-grey_white_letter-m.svg.png?20200417105458",
            replies: [],
          },
        ],
      },
      {
        name: "Mervis",
        text: "Lorem ipsum dolor sit amet consectetur",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eo_circle_blue-grey_white_letter-m.svg/768px-Eo_circle_blue-grey_white_letter-m.svg.png?20200417105458",
        replies: [],
      },
      {
        name: "Maheshwaran",
        text: "Lorem ipsum dolor sit amet consectetur",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eo_circle_blue-grey_white_letter-m.svg/768px-Eo_circle_blue-grey_white_letter-m.svg.png?20200417105458",
        replies: [
          {
            name: "Nadar",
            text: "Lorem ipsum dolor sit amet consectetur",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Eo_circle_blue-grey_white_letter-n.svg/768px-Eo_circle_blue-grey_white_letter-n.svg.png?20200417105508",
            replies: [],
          },
          {
            name: "Nilesh",
            text: "Lorem ipsum dolor sit amet consectetur",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Anujeet",
    text: "Lorem ipsum dolor sit amet consectetur",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eo_circle_blue-grey_white_letter-a.svg/768px-Eo_circle_blue-grey_white_letter-a.svg.png?20200417105258",
    replies: [
      {
        name: "Mahesh",
        text: "Lorem ipsum dolor sit amet consectetur",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eo_circle_blue-grey_white_letter-m.svg/768px-Eo_circle_blue-grey_white_letter-m.svg.png?20200417105458",
        replies: [],
      },
      {
        name: "Mahesh",
        text: "Lorem ipsum dolor sit amet consectetur",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eo_circle_blue-grey_white_letter-m.svg/768px-Eo_circle_blue-grey_white_letter-m.svg.png?20200417105458",
        replies: [],
      },
    ],
  },
  {
    name: "Mervis",
    text: "Lorem ipsum dolor sit amet consectetur",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eo_circle_blue-grey_white_letter-m.svg/768px-Eo_circle_blue-grey_white_letter-m.svg.png?20200417105458",
    replies: [
      {
        name: "Mahesh",
        text: "Lorem ipsum dolor sit amet consectetur",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eo_circle_blue-grey_white_letter-m.svg/768px-Eo_circle_blue-grey_white_letter-m.svg.png?20200417105458",
        replies: [
          {
            name: "Nilesh",
            text: "Lorem ipsum dolor sit amet consectetur",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Eo_circle_blue-grey_white_letter-n.svg/768px-Eo_circle_blue-grey_white_letter-n.svg.png?20200417105508",
            replies: [
              {
                name: "Nilesh",
                text: "Lorem ipsum dolor sit amet consectetur",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Eo_circle_blue-grey_white_letter-n.svg/768px-Eo_circle_blue-grey_white_letter-n.svg.png?20200417105508",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nilesh Mishra",
    text: "Lorem ipsum dolor sit amet consectetur",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Eo_circle_blue-grey_white_letter-n.svg/768px-Eo_circle_blue-grey_white_letter-n.svg.png?20200417105508",
    replies: [
      {
        name: "Anujeet",
        text: "Lorem ipsum dolor sit amet consectetur",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eo_circle_blue-grey_white_letter-a.svg/768px-Eo_circle_blue-grey_white_letter-a.svg.png?20200417105258",
        replies: [],
      },
      {
        name: "Nilesh Mishra",
        text: "Lorem ipsum dolor sit amet consectetur",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Eo_circle_blue-grey_white_letter-n.svg/768px-Eo_circle_blue-grey_white_letter-n.svg.png?20200417105508",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  return (
    <div className="flex p-3 bg-gray-100 shadow-sm my-1">
      <img
        className="h-8"
        src={data?.src}
        alt="user icon"
      />
      <div className="flex flex-col px-3">
        <p className="font-bold">{data.name}</p>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

const CommentList = ({comments}) => {
    return (
        comments.map((comment, index) => (
            <div key={index}>
                <Comment data={comment} />
                <div className="pl-5 ml-5 border border-l-gray-400">
                    <CommentList comments={comment.replies}/>
                </div>
            </div>
      ))
    )
    
}

const CommentsContainer = ({commentCount}) => {
  return (
    <div className="mt-5 ml-2 p-1">
      <p className="font-bold text-2xl">{commentCount} Comments:</p>
      <CommentList comments={commentsData}/>
    </div>
  );
};

export default CommentsContainer;
