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

## 연대기 그림

`_data/timelines/<name>.yml`에 논문을 적고, 글 본문에 아래 한 줄을 넣는다. 다크 모드는 사이트 테마를 따라간다. 항목 형식은 `_data/timelines/stop.yml` 맨 위 주석에 있다.

```liquid
{% include timeline.html name="stop" %}
```

## 댓글

[giscus](https://giscus.app)로 글마다 댓글이 붙는다. 댓글은 이 repo의 Discussions(Announcements 카테고리)에 저장된다. 설정은 `_config.yml`의 `giscus`.

## 로컬 미리보기

```sh
bundle install
bundle exec jekyll serve --livereload
# http://localhost:4000
```
