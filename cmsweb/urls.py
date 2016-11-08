
from django.conf.urls import  include, url
from views import *

urlpatterns = [
	url(r'^$',HomeView.as_view() , name='index'),
	#url(r'^sitemap\.xml$', 'cmsweb.views.sitemap',name='sitemap'),
	#url(r'^ingresar/$',TiendaView.as_view() , name='ingresar'),
	url(r'^catalogo/',HomeView.as_view() , name='catalogo'),
	url(r'^producto/',HomeView.as_view() , name='producto'),
	#url(r'^carro/',TiendaView.as_view() , name='carro'),
	#url(r'^usuario/perfil/$',TiendaView.as_view() , name='carro'),
	#url(r'^procesar-compra/',TiendaView.as_view() , name='procesar'),
	#url(r'^sp/',TiendaView.as_view() , name='page_static'),
	#url(r'^felicidades/$','pedido.views.felicidades' , name='felicidades'),
	#url(r'^custom/$',CustomView.as_view(), name='custom'),
]