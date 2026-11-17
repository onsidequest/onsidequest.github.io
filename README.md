# onsidequest.github.io

GitHub Pages + Jekyll 블로그. https://onsidequest.github.io

## 글 쓰기

`_posts/YYYY-MM-DD-slug.md` 파일을 만들고 `main`에 push하면 GitHub Actions(`.github/workflows/pages.yml`)가 자동으로 빌드·배포한다.

```yaml
---
title: "글 제목"
---

본문
```

아직 다 쓰지 않은 글은 `published: false`를 함께 적으면 배포에서 빠진다. 다 쓰면 그 줄을 지운다.

## 링크 미리보기

글 본문에 아래 한 줄을 넣으면 [jekyll-linkpreview](https://github.com/ysk24ok/jekyll-linkpreview)가 그 페이지의 제목·설명·썸네일을 가져와 카드로 그린다. 카드 모양은 `_includes/linkpreview.html`(썸네일이 없는 페이지는 `linkpreview_nog.html`)에서 바꾼다.

```liquid
{% linkpreview "https://example.com/article" %}
```

가져온 내용은 `_cache/`에 저장되고, 저장된 링크는 다시 가져오지 않는다. 새 링크를 넣었으면 로컬에서 한 번 빌드해 생긴 `_cache/*.json`을 함께 commit한다. 그러지 않으면 GitHub Actions가 빌드할 때 직접 가져오는데, 그 사이트가 요청을 막으면 빌드가 실패한다.

## 연대기 그림

`_data/timelines/<name>.yml`에 논문을 적고, 글 본문에 아래 한 줄을 넣는다. 다크 모드는 사이트 테마를 따라간다. 항목 형식은 `_data/timelines/stop.yml` 맨 위 주석에 있다.

```liquid
{% include timeline.html name="stop" %}
```

`fold="Timeline"`을 함께 넘기면 "Timeline (논문 수)" 한 줄로 접혀 있다가 누르면 펼쳐진다. 접힌 항목을 가리키는 링크를 누르면 자동으로 펼쳐진다.

## 수식

글 맨 위에 `math: true`를 적으면 그 글에서만 KaTeX를 불러온다. 수식은 LaTeX로 `$$...$$` 안에 쓴다. 문장 안에 쓰면 inline이고, 앞뒤에 빈 줄을 두고 따로 쓰면 가운데 정렬된 display 수식이 된다.

```markdown
---
title: "글 제목"
math: true
---

improver $$I_0$$ 는 ...

$$
I_t = I_{t-1}(\hat{u}, I_{t-1}, L)
$$
```

## 댓글

[giscus](https://giscus.app)로 글마다 댓글이 붙는다. 댓글은 이 repo의 Discussions(Announcements 카테고리)에 저장된다. 설정은 `_config.yml`의 `giscus`.

## 로컬 미리보기

```sh
bundle install
bundle exec jekyll serve --livereload
# http://localhost:4000
```

`published: false`인 글까지 보려면 `--unpublished`를 붙인다.
