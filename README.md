## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null :false|
|email|string|null :false|
|password|sttring|null :false|

### Association
-has_many :messages
-has_many :users_groups
-has_many :groups, through: :users_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null :false|
|user_id|integer|null :false, foreign_key: true|

### Association
-had_many :messages
-has_many :user_groups
-has_many :users, through: :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null :false, foreign_key: true|
### Association
-belogns_to :users
-belogns_to : groups

## messages
|Column|Type|Options|
|------|----|-------|
|body|text|null :false|
|image|string|null :false|
|user_id|integer|null :false, foreign_key: true|
|group_id|integer|null :false, foreign_key: true|
### Association
-belogns_to :user
-belogns_to :groups
-has_many :tags
-has_many :messages_tags, through: :tags

## tagsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null :false|
### Association
-has_many :messages_tags
-has_many :messages, through: messages_tags

## messages_tagsテーブル
|Column|Type|Options|
|------|----|-------|
|tag_id|integer|null :false|
|message_id|integer|null :false|
### Association
-belongs_to :messages
-belongs_to :tags