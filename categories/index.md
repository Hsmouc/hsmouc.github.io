---
title: 分类
layout: default
---

<div class="container-fluid single">
	<div class="row">
		<div itemscope itemtype="http://schema.org/Article" class="col-md-12 article">
			<h1 class="header" itemprop="name">{{ page.title }}</h1>
			<div class="content-panel content">
				<span itemprop="articleBody">
					<ul>
						{% for cat in site.categories %}
							<li id="{{ cat[0] }}">{{ cat[0] }}</li>
							<ul>
								{% for post in cat[1] %}
									<li class="listing-item">
										<time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
										<a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
									</li>
								{% endfor %}
							</ul>
						{% endfor %}
					</ul>
				</span>
			</div>
		</div>
	</div>
</div>
