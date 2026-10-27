# onsidequest.github.io

GitHub Pages + Jekyll 블로그. https://onsidequest.github.io

## 글 쓰기

`_posts/YYYY-MM-DD-slug.md` 파일을 만들고 `main`에 push하면 GitHub Pages가 자동으로 빌드·배포한다.

```yaml
---
title: "글 제목"
---

본문
```

## 댓글

[giscus](https://giscus.app)로 글마다 댓글이 붙는다. 댓글은 이 repo의 Discussions(Announcements 카테고리)에 저장된다. 설정은 `_config.yml`의 `giscus`.

## 로컬 미리보기

```sh
bundle install
bundle exec jekyll serve --livereload
# http://localhost:4000
```
