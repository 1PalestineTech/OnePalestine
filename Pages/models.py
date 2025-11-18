from django.db import models



class NavBar(models.Model):
    label = models.CharField(max_length=200)
    url = models.CharField(max_length=200)



class ZionistMyth(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    def __str__(self):
        return self.title

class Projects(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/',default='images/default_project.jpg')
    active = models.BooleanField(default=True)
    def __str__(self):
        return self.title

class Categories(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class OrganizationInfo(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    link = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/',default='images/default_org.jpg')
    category = models.ForeignKey(Categories, on_delete=models.CASCADE, related_name='organizations')
    def __str__(self):
        return self.name

class Articles(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/',default='images/default_article.jpg')
    category = models.ForeignKey(Categories, on_delete=models.CASCADE, related_name='articles')
    published_date = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.title

class History(models.Model):
    date = models.CharField(max_length=50)
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.CharField(max_length=200)
    def __str__(self):
        return self.title + " " + self.date

class Pages(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='images/',default='images/default_cover.jpg')
    has_slide = models.BooleanField(default=False)
    def __str__(self):
        return self.name

class SlideShow(models.Model):
    page = models.ForeignKey(Pages, on_delete=models.CASCADE, related_name='slides')
    title = models.CharField(max_length=200,blank=True)
    date = models.CharField(max_length=200,blank=True)
    image = models.ImageField(upload_to='images/')
    caption = models.CharField(max_length=500, blank=True)

class Tags(models.Model):
    name = models.CharField(max_length=100)
    organizations = models.ManyToManyField(OrganizationInfo, related_name="organization_tags",blank=True)
    projects = models.ManyToManyField(Projects, related_name="projects_tags",blank=True)
    articles = models.ManyToManyField(Articles, related_name="atcticles_tags",blank=True)
    slides = models.ManyToManyField(SlideShow,related_name="slides_tags",blank=True)
    def __str__(self):
        return self.name