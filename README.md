
# README
## NAME
PAPA-CHAT 〜パパも子育ても頑張ります！〜

## PAPA-CHATとは
パパの子育て意見交換ができるchatサイトである。グループごとにchatで意見交換が可能である。

## デプロイ先
https://papachat.herokuapp.com/  

## ページ紹介
・TOPページ<br>
・新規登録、ログイン、ログアウト機能<br>
・chat機能<br>
・インクリメンタルサーチ機能<br>


## 使用した機能、技術
gem 'rails, ~> 5.0.7, >= 5.0.7.2'<br>
gem 'mysql2, >= 0.3.18, < 0.6.0'<br>
gem 'devise'<br>
gem 'font-awesome-sass'<br>
gem 'haml-rails'<br>
gem 'sass-rails, ~> 5.0'<br>
gem 'jquery-rails'<br>
gem jbuilder, ~> 2.5<br>
gem 'pry-rails'<br>
gem 'carrierwave'(画像のアップロード)<br>
gem 'mini_magick'（画像加工）<br>

# 各テーブル
## usersテーブル
|Column|Type|Options|
|------|----|null: false|
|email|string|null: false|
|password|string|null: false|
|nickname|string|index: true|
### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages

## groupテーブル
|Column|Type|Options|
|------|----|null: false|
|name|string|null: false|
### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages

 
 ## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|-------|
|image|text|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
