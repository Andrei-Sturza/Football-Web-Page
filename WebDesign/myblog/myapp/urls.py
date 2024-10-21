from django.urls import path
from myapp.views import home, about, contact, chatbot, gallery, submit_review, update_review, delete_review

urlpatterns = [
    path("", home, name="home"),
    path("about/", about, name="about"),
    path("form/", contact, name="form"),  # URL path can remain 'form', but the view function is 'contact'
    path("chatbot/", chatbot, name="chatbot"),
    path("submit-review/", submit_review, name="submit_review"),
    path("update-review/<int:review_id>/", update_review, name="update_review"),
    path("delete-review/<int:review_id>/", delete_review, name="delete_review"),  # Corrected import and URL pattern
    path("gallery/", gallery, name="gallery"),
]

