# onsidequest.github.io

GitHub Pages + Jekyll 기술 블로그. https://onsidequest.github.io

## 글 쓰기

`_posts/YYYY-MM-DD-slug.md` 파일을 만들고 `main`에 push하면 GitHub Pages가 자동으로 빌드·배포한다.

```yaml
---
title: "글 제목"
description: "목록에 보일 한 줄 요약"
tags: [tag1, tag2]
---
```

## 로컬 미리보기

```sh
bundle install
bundle exec jekyll serve --livereload
# http://localhost:4000
```

## 구조

| 경로 | 내용 |
|---|---|
| `_config.yml` | 사이트 제목, 설명, URL, plugin |
| `_layouts/` | `default`, `home`, `post`, `page` layout |
| `_includes/` | head, header, footer, 글 목록 항목 |
| `assets/css/main.css` | 스타일 (라이트/다크 모드 포함) |
| `about.md`, `tags.html` | About, 태그 페이지 |
