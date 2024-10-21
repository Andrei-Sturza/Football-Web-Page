from django.shortcuts import get_object_or_404, render, redirect
from .models import Post, Review
from .forms import ReviewForm

def home(request):
    posts = Post.objects.all()  # Fetch all posts from the database
    reviews = Review.objects.all().order_by('-date')
    return render(request, 'index.html', {'posts': posts, 'reviews': reviews})

def submit_review(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ReviewForm()
    return render(request, 'submit_review.html', {'form': form})

def update_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST, instance=review)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ReviewForm(instance=review)
    return render(request, 'update_review.html', {'form': form})

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'form.html')

def chatbot(request):
    return render(request, 'chatbot.html')

def gallery(request):
    return render(request, 'gallery.html')

def delete_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        review.delete()  # Correct method to delete an object in Django
        return redirect('home')
    return render(request, 'delete_review.html', {'review': review})  # Correct template path and pass the review object
