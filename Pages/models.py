from django.db import models



class Tags(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

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
    tags = models.ManyToManyField(Tags, related_name="projects",blank=True)
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
    tags = models.ManyToManyField(Tags, related_name="organizations",blank=True)
    def __str__(self):
        return self.name

class Articles(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    content = models.TextField() 
    image = models.ImageField(upload_to='images/',default='images/default_article.jpg')
    category = models.ForeignKey(Categories, on_delete=models.CASCADE, related_name='articles')
    published_date = models.DateField(auto_now_add=True)
    tags = models.ManyToManyField(Tags, related_name="articles",blank=True)
    def __str__(self):
        return self.title

class History(models.Model):
    date = models.CharField(max_length=50)
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.CharField(max_length=200)
    def __str__(self):
        return self.title + " " + self.date
