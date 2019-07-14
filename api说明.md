## api说明

说明：

```json
测试地址：把localhost改成 lzlbog.club
初始化了管理员账号和密码：skyworthclub 1234567

""：代表String类型的数据，为省篇幅，参数说明会写在双引号内；
int：代表整型数据；
boolean：代表布尔值；
默认情况下，请求头设置Content-type="application/json";
//：后面的文字属于参数说明
message：string类型的提示信息
status：int型状态码（200：请求成功，400：客户端请求参数等不符合要求，401：未登录；403：权限不足；500：服务器出现异常
```



### 登录：

```json
接口地址：http://localhost:8800/api/auth/login
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{
    "username": "",	//用户名	
    "password": ""	//密码
}
2.返回参数说明：
{
    "userInfo": {//用户信息
        "avatarUrl": "",	//头像图片url
        "id": int,			//用户唯一id
        "username": ""		//用户名
    },
    "message": "",			//提示信息
    "status": int 			//状态码
}
```

### 注销登录：

```json
接口地址：http://localhost:8800/api/auth/logout
请求方式：http get
请求示例：Examples
接口参数：
1.请求参数说明：
{

}
2.返回参数说明：
{
    "message": "",	//提示信息
    "status": int	//状态码
}
```

### 注册：

```json
接口地址：http://localhost:8800/api/auth/register
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{
    "username":"用户名",
    "password": "密码",
    "repeatPassword": "重复密码",
    "email": "邮箱",
    "validationCode":"验证码"
}
2.返回参数说明：
{
    "message": "提示信息",
    "status": 状态码
}
```

### 发送验证码：

```json
接口地址：http://localhost:8800/api/auth/sendValidationCode
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{
	"email": "邮箱",
	"sendFor": "" //请求验证码的目的【1代表注册，2代表重置密码】
}
2.返回参数说明：
{
    "message": "提示信息",
    "status": 状态码
}
```

### 重置密码：

```json
接口地址：http://localhost:8800/api/auth/resetPassword
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{
    "email": "邮箱",
    "newPassword": "新密码",
    "repeatPassword": "重复新密码",
    "validationCode": "验证码"
}
2.返回参数说明：
{
    "message": "提示信息",
    "status": 状态码
}
```

### 设置用户头像：

```json
接口地址：http://localhost:8800/api/file/user/setAvatar/{username}
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{
	"avatarImage": 【图片文件】
}
2.返回参数说明：
{
    "avatarUrl": "头像图片地址",
    "message": "提示信息！",
    "status": int
}
```

### 获取比赛列表（分页）：

```json
接口地址：http://localhost:8800/api/match/list/{page}
请求方式：http get
请求示例：Examples
接口参数：
1.请求参数说明：
{
    
}
2.返回参数说明：
{
"message": "",	//提示信息
"pageObject": {	//分页对象
    "total": int,	//总记录数
    "size": int,	//每一页的记录数大小
    "current": int,	//当前第几页
    "records": [	//比赛信息对象数组
        {	//数组对象
        "matchId": 2,	//比赛唯一id标识
        "matchName": "",	//比赛名称
        "matchImageUrl": "",	//比赛宣传图片地址
        "matchSummary": "",		//比赛简介或详情
        "matchSignupEnd": "yyyy-MM-dd",	//比赛报名截止时间，如2018-02-23
        },
        ......
    ],
    "pages": int	//总页数
    },
    "status": 200	//状态码
}
```

### 获取比赛详细信息：

```json
接口地址：http://localhost:8800/api/match/detail/{matchId}
请求方式：http get
请求示例：Examples
接口参数：
1.请求参数说明：
{
    
}
2.返回参数说明：
{
    "match": {
        "matchId": int,
        "matchName": "比赛名称",
        "matchImageUrl": "比赛宣传图片地址",
        "matchSummary": "比赛简介",
        "matchDetail": "比赛详情",
        "matchOrganizer": "主办单位",
        "matchCoorganizer": "协办单位",
        "matchContestants": "参赛对象",
        "matchSignupBegin": "yyyy-MM-dd",//报名开始时间
        "matchSignupEnd": "yyyy-MM-dd",//报名结束时间
        "matchBeginTime": "yyyy-MM-dd",//比赛开始时间
        "matchEndTime": "yyyy-MM-dd",	//比赛结束时间
        "matchLocation": "比赛地点",
        "matchSignupUrl": "报名或官网链接"
    },
    "message": "提示信息",
    "status": int	//状态码
}
```

### 轮播图：

```json
接口地址：http://localhost:8800/api/match/carouselFigure
请求方式：http get
请求示例：Examples
接口参数：
1.请求参数说明：
{
    
}
2.返回参数说明：
{
    "matches": [
        {
            "matchId": int,	//比赛id
            "matchName": "比赛名称",
            "matchImageUrl": "图片url"
        },
        {
            "matchId": int,
            "matchName": "",
            "matchImageUrl": ""
        },
        {
            "matchId": int,
            "matchName": "",
            "matchImageUrl": ""
        },
        {
            "matchId": int,
            "matchName": "",
            "matchImageUrl": ""
        },
        {
            "matchId": int,
            "matchName": "",
            "matchImageUrl": ""
        }
    ],
    "message": "提示信息",
    "status": int	//状态码
}
```



### 添加评论：

```json
接口地址：http://localhost:8800/api/comment/post/{matchId}
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{
	"commentContent": "评论内容",
	"userId": int,	//评论者id
	"matchId": int	//比赛id
}
2.返回参数说明：
{
    "comment": {
        "commentId": int,	//评论对象的id
        "commentTime": "yyyy-MM-ddTHH:mm:ss",	//评论时间，如2018-10-19T01:11:11
        "commentContent": "评论内容",
        "userId": 1,	//评论者id
        "matchId": 1,	//比赛id
    },
    "message": "提示信息",
    "status": int
}
```

### 获取评论列表：

```json
接口地址：http://localhost:8800/api/comment/list/{matchId}/{page}
请求方式：http get
请求示例：Examples
接口参数：
1.请求参数说明：
{

}
2.返回参数说明：
{
"commentPage": {	//评论分页对象
    "total": int,	//总评论数
    "size": int,	//每页最多包含评论条数（不计子评论）
    "current": int, //当前页码
    "records": [	//评论对象数组
	 {
        "commentId": int,	//评论对象id
        "commentTime": "yyyy-MM-ddTHH:mm:ss",	//评论时间
        "commentContent": "评论内容",
        "userId": int,	//用户id
        "matchId": int,	//所评比赛id	
        "childComments": [	//子评论对象数组
            {
                "commentId": int, //评论对象id
                "commentTime": "yyyy-MM-ddTHH:mm:ss",	//评论时间
                "commentContent": "评论内容",
                "userId": int,	//用户id
                "replyTo": "被回复的评论对象的用户名",
                "commentUser": {	//子评论用户的信息
                    "id": int,	//子评论的用户id	
                    "username": "子评论的用户名",
                    "avatarUrl": "子评论的用户名头像图片url",
                }
           	},
            ......
        ],
        "commentUser": {	//评论用户的信息
           "id": int,	//评论的用户id	
           "username": "评论的用户名",
           "avatarUrl": "评论的用户名头像图片url",
        }
	},
    ......
   	],
    "pages": int //总页数
},
"message": "提示信息",
"status": int	//状态码
}
```

### 回复评论：

```json
接口地址：http://localhost:8800/api/comment/reply/{matchId}
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{
	"commentContent": "回复的内容",
	"userId": int,	//该用户的id
	"matchId": int,	//比赛的id	
	"parentId": int,	//父评论的id
	"replyTo": "想要回复的评论的用户名"	
}
备注：父评论id指的是顶层评论对象的id，不是想要回复的评论对象的id

2.返回参数说明：
{
    "replyComment": {
        "commentId": int //评论id,
        "commentTime": "yyyy-MM-dd",	//评论时间
        "commentContent": "回复的内容",
        "userId": int,	//该用户的id
        "matchId": int,	//比赛的id
        "parentId": int,	//父评论的id
        "replyTo": "想要回复的评论的用户名",
    },
    "message": "提示信息",
    "status": int //状态码
}
```

### 按关键字搜索：

```json
接口地址：http://localhost:8800/api/search?q={keyword}(&page={pageNum})
请求方式：http get
请求示例：Examples
接口参数：
1.请求参数说明：
{
    
}
2.返回参数说明：（比赛信息字段详细说明见前文
{
"matches": {	//搜索结果
    "content": [//比赛信息对象数组
        {//比赛信息对象
            "matchId": int, 
            "matchName": "",
            "matchImageUrl": "",
            "matchSummary": "",
            "matchDetail": "比赛详情",
            "matchOrganizer": "",
            "matchCoorganizer": "协办单位",
            "matchContestants": "",
            "matchSignupBegin": "yyyy-MM-dd",
            "matchSignupEnd": "yyyy-MM-dd",
            "matchBeginTime": "yyyy-MM-dd",
            "matchEndTime": "yyyy-MM-dd",
            "matchLocation": "",
            "matchSignupUrl": "",
            "logicFlag": 1	//特殊标记，可忽略
        }
      ......
        
     ],
    "last": boolean,	//是否最后一页
    "totalElements": 1,	//总条数
    "totalPages": 1,	//总页数
    "sort": [	//排序规则，可忽略
        {
            "direction": "ASC",
            "property": "matchBeginTime",
            "ignoreCase": false,
            "nullHandling": "NATIVE",
            "descending": false,
            "ascending": true
        },
        {
            "direction": "ASC",
            "property": "matchId",
            "ignoreCase": false,
            "nullHandling": "NATIVE",
            "descending": false,
            "ascending": true
        }
    ],
    "first": boolean,	//是否第一页
    "numberOfElements": int,	//该页记录数
    "size": int,	//每页最多记录条数
    "number": int	//当前页码-1
    }
}
```

### 按月份搜索：

```json
接口地址：http://localhost:8800/api/search/{year}/{month}(?page={pageNum})
请求方式：http get
请求示例：Examples
接口参数：
1.请求参数说明：
{
    
}
2.返回参数说明：
{
"matches": {	//搜索结果
    "content": [//比赛信息对象数组
        {//比赛信息对象
            "matchId": int, 
            "matchName": "",
            "matchImageUrl": "",
            "matchSummary": "",
            "matchDetail": "比赛详情",
            "matchOrganizer": "",
            "matchCoorganizer": "协办单位",
            "matchContestants": "",
            "matchSignupBegin": "yyyy-MM-dd",
            "matchSignupEnd": "yyyy-MM-dd",
            "matchBeginTime": "yyyy-MM-dd",
            "matchEndTime": "yyyy-MM-dd",
            "matchLocation": "",
            "matchSignupUrl": "",
            "logicFlag": 1	//特殊标记，可忽略
        }
      ......
        
     ],
    "last": boolean,	//是否最后一页
    "totalElements": 1,	//总条数
    "totalPages": 1,	//总页数
    "sort": [	//排序规则，可忽略
        {
            "direction": "ASC",
            "property": "matchBeginTime",
            "ignoreCase": false,
            "nullHandling": "NATIVE",
            "descending": false,
            "ascending": true
        },
        {
            "direction": "ASC",
            "property": "matchId",
            "ignoreCase": false,
            "nullHandling": "NATIVE",
            "descending": false,
            "ascending": true
        }
    ],
    "first": boolean,	//是否第一页
    "numberOfElements": int,	//该页记录数
    "size": int,	//每页最多记录条数
    "number": int	//当前页码-1
    }
}
```

### 自定义日期范围搜索：

```json
接口地址：http://localhost:8800/api/search/range/{pageNum}
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{
	"begin": "yyyy-MM-dd",	//起始日期
	"end": "yyyy-MM-dd" 	//截止日期,可留空
}
2.返回参数说明：
{
"matches": {	//搜索结果
    "content": [//比赛信息对象数组
        {//比赛信息对象
            "matchId": int, 
            "matchName": "",
            "matchImageUrl": "",
            "matchSummary": "",
            "matchDetail": "比赛详情",
            "matchOrganizer": "",
            "matchCoorganizer": "协办单位",
            "matchContestants": "",
            "matchSignupBegin": "yyyy-MM-dd",
            "matchSignupEnd": "yyyy-MM-dd",
            "matchBeginTime": "yyyy-MM-dd",
            "matchEndTime": "yyyy-MM-dd",
            "matchLocation": "",
            "matchSignupUrl": "",
            "logicFlag": 1	//特殊标记，可忽略
        }
      ......
        
     ],
    "last": boolean,	//是否最后一页
    "totalElements": 1,	//总条数
    "totalPages": 1,	//总页数
    "sort": [	//排序规则，可忽略
        {
            "direction": "ASC",
            "property": "matchBeginTime",
            "ignoreCase": false,
            "nullHandling": "NATIVE",
            "descending": false,
            "ascending": true
        },
        {
            "direction": "ASC",
            "property": "matchId",
            "ignoreCase": false,
            "nullHandling": "NATIVE",
            "descending": false,
            "ascending": true
        }
    ],
    "first": boolean,	//是否第一页
    "numberOfElements": int,	//该页记录数
    "size": int,	//每页最多记录条数
    "number": int	//当前页码-1
    }
}
```





### 上传比赛宣传图片：

```json
接口地址：http://localhost:8800/api/file/match/setImage
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{
	"matchImage": 【图片文件】
}
2.返回参数说明：
{
    "matchImageUrl": "图片地址",
    "message": "提示信息！",
    "status": int	//状态码
}
```

### 发布/上传比赛信息：

```json
接口地址：http://localhost:8800/api/match/post
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{	//参数详细说明见前文
  "matchName": "",
  "matchImageUrl": "上传比赛宣传图片时返回的url",
  "matchSummary": "",
  "matchDetail": "比赛详情",
  "matchOrganizer": "",
  "matchCoorganizer": "协办单位",
  "matchContestants": "",
  "matchSignupBegin": "",
  "matchSignupEnd": "",
  "matchBeginTime": "",
  "matchEndTime": "",
  "matchLocation": "",
  "matchSignupUrl": ""
}
2.返回参数说明：
{
    "match": {	//返回比赛信息id和其他内容
        "matchId": 10,	//
        "matchName": "",
        "matchImageUrl": "",
        "matchSummary": "",
        "matchDetail": "比赛详情",
        "matchOrganizer": "",
        "matchCoorganizer": "协办单位",
        "matchContestants": "",
        "matchSignupBegin": "",
        "matchSignupEnd": "",
        "matchBeginTime": "",
        "matchEndTime": "",
        "matchLocation": "",
        "matchSignupUrl": "",
        "logicFlag": 1
    },
    "message": "提示信息",
    "status": int	//状态码
}
```

### 修改比赛信息：

```json
接口地址：http://localhost:8800/api/match/edit/{username}/{matchId}
请求方式：http put
请求示例：Examples
接口参数：
1.请求参数说明：
{	//参数详细说明见前文，把需要修改的字段设新值，其他字段保留原值，留空则默认不变
  "matchName": "",
  "matchImageUrl": "上传比赛宣传图片时返回的url",
  "matchSummary": "",
  "matchDetail": "比赛详情",
  "matchOrganizer": "",
  "matchContestants": "",
  "matchSignupBegin": "",
  "matchSignupEnd": "",
  "matchBeginTime": "",
  "matchEndTime": "",
  "matchLocation": "",
  "matchSignupUrl": ""
}
2.返回参数说明：
{
    "match": {	//返回比赛信息id和其他已更新的字段
        "matchId": 10,	//
        "matchName": "",
        "matchImageUrl": "",
        "matchSummary": "",
        "matchDetail": "比赛详情",
        "matchOrganizer": "",
        "matchContestants": "",
        "matchSignupBegin": "",
        "matchSignupEnd": "",
        "matchBeginTime": "",
        "matchEndTime": "",
        "matchLocation": "",
        "matchSignupUrl": "",
        "logicFlag": 1
    },
    "message": "提示信息",
    "status": int	//状态码
}
```

### 富文本编辑器中图片上传：

```json
接口地址：http://localhost:8800/api/file/match/imageUpload
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{	
    "image": 图片文件
}
2.返回参数说明：
{
    "imageUrl": "图片的url",
    "message": "提示信息",
    "status": int	状态码
}
```

### 比赛信息管理：

```json
接口地址：http://localhost:8800/api/admin/checkMatch/{page}
请求方式：http get
请求示例：Examples
接口参数：
1.请求参数说明：
{	

}
2.返回参数说明：
{
    "matchPage": {
        "total": int,//总记录数
        "size": int,//单页最多条数
        "current": int,	//当前第几页
        "pages": int,	//总页数
        "records": [	//比赛信息对象数组
            {
                "matchId": int,
                "matchName": "比赛名称",
                "matchPublisher": "发布者用户名",
                "lastModify": "发布时间",
                "isChecked": short,//0：未审核；1审核通过；-1：审核不通过
                "logicFlag": int //1：未删除；-1：已删除
            },
            ...
         ]
     },
    "message": "提示信息",
    "status": int        
}
            
```

### 审核通过：

```json
接口地址：http://localhost:8800/api/admin/passChecking
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{
	"matchId": int,	//比赛id
	"publisher": "发布者用户名",	
	"matchName": "比赛名称"
	
}
2.返回参数说明：
{
    "message": "提示信息",
    "status": int        
}
```

### 审核未通过：

```json
接口地址：http://localhost:8800/api/admin/unPassChecking
请求方式：http post
请求示例：Examples
接口参数：
1.请求参数说明：
{
	"matchId": int,	//比赛id
	"publisher": "发布者用户名",	
	"matchName": "比赛名称",
	"message": "审核无法通过的具体原因（用于邮件通知）"
}
2.返回参数说明：
{
    "message": "提示信息",
    "status": int        
}
```
