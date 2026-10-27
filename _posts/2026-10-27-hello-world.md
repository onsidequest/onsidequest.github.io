---
title: "블로그를 시작합니다"
description: "GitHub Pages와 Jekyll로 기술 블로그를 열었습니다. 글을 쓰고 올리는 방법을 정리합니다."
tags: [blog, jekyll]
---

GitHub Pages와 Jekyll로 기술 블로그를 열었습니다. 앞으로 직접 만들어 보면서 배운 것들을 이곳에 기록하려고 합니다.

## 이 블로그가 동작하는 방식

글은 모두 Markdown 파일입니다. `_posts` 폴더에 파일을 추가하고 `main` 브랜치에 push하면, GitHub Pages가 Jekyll로 사이트를 빌드해서 자동으로 배포합니다.

파일 이름은 `YYYY-MM-DD-slug.md` 형식을 따릅니다.

```text
_posts/
└── 2026-10-27-hello-world.md
```

## 글 머리말 (front matter)

파일 맨 위에 제목, 요약, 태그를 적습니다.

```yaml
---
title: "글 제목"
description: "목록과 검색 결과에 보일 한 줄 요약"
tags: [python, debugging]
---
```

## 코드 블록

언어를 지정하면 문법 강조가 적용됩니다.

```python
def greet(name: str) -> str:
    # 첫 글 기념
    return f"Hello, {name}!"

print(greet("world"))
```

> 꾸준히 쓰는 것을 목표로 합니다.
